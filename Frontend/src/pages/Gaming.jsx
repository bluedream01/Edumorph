import React, { useState, useEffect, useRef } from "react";
import spaceBg from "../assets/space.jpg";
import allQuestions from "./data/questions.js";

const bubbleColors = [
  "radial-gradient(circle, #4facfe, #00f2fe)",
  "radial-gradient(circle, #43e97b, #38f9d7)",
  "radial-gradient(circle, #ff9966, #ff5e62)",
  "radial-gradient(circle, #a18cd1, #fbc2eb)",
  "radial-gradient(circle, #f7971e, #ffd200)"
];

const getRandomQuestions = (count) => {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const BUBBLE_SIZE = 80; // px, used for hitbox and layout
const ROCKET_HEIGHT = 100; // px (matches your rocket)
const ROCKET_BOTTOM_OFFSET = 60; // px bottom offset (matches style)

const Gaming = () => {
  const [questionPacks, setQuestionPacks] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const [bullet, setBullet] = useState(null);
  const [rocketX, setRocketX] = useState(400);
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [borderColor, setBorderColor] = useState("");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const gameBoxRef = useRef(null);

  // Prevent double-processing of same bubble
  const processedHitsRef = useRef(new Set());

  // For overlap detection
  const overlapMapRef = useRef(new Map());

  // Load random questions at start
  useEffect(() => {
    setQuestionPacks(getRandomQuestions(5));
  }, []);

  // Helper to compute safe minY/maxY for bubbles using gameBox size
  const computeBubbleYBounds = () => {
    const rect = gameBoxRef.current?.getBoundingClientRect();
    const areaHeight = rect?.height ?? 700;
    const minY = 80; // keep some top space for HUD
    // compute rocket top inside the game box: top = areaHeight - ROCKET_BOTTOM_OFFSET - ROCKET_HEIGHT
    const rocketTop = areaHeight - ROCKET_BOTTOM_OFFSET - ROCKET_HEIGHT;
    const maxY = Math.max(minY + 20, rocketTop - BUBBLE_SIZE - 8); // ensure bubble stays above rocket
    return { minY, maxY, areaWidth: rect?.width ?? 900, areaHeight };
  };

  // Generate bubbles for current question (no overlapping at spawn)
  const generateBubbles = (questionObj) => {
    if (!questionObj || !gameBoxRef.current) return;

    const { minY, maxY, areaWidth } = computeBubbleYBounds();

    const shuffledOptions = [...questionObj.options].sort(() => Math.random() - 0.5);

    const placed = [];
    const bubbleData = shuffledOptions.map((opt, index) => {
      // try to find a non-overlapping x,y
      let tries = 0;
      let x, y;
      do {
        x = Math.max(8, Math.random() * (areaWidth - BUBBLE_SIZE - 16));
        y = minY + Math.random() * (maxY - minY);
        tries++;
        // avoid being too close to already placed bubbles
      } while (
        tries < 200 &&
        placed.some(
          (p) =>
            Math.hypot(p.x + BUBBLE_SIZE / 2 - (x + BUBBLE_SIZE / 2), p.y + BUBBLE_SIZE / 2 - (y + BUBBLE_SIZE / 2)) <
            BUBBLE_SIZE + 6
        )
      );

      const bubble = {
        id: Date.now() + index + Math.floor(Math.random() * 1000),
        x,
        y,
        text: opt,
        color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
        floatDir: Math.random() > 0.5 ? 1 : -1,
        speed: 0.4 + Math.random() * 0.6,
        bornAt: Date.now(),
        // mark not hit yet
        hasBeenHit: false
      };
      placed.push(bubble);
      return bubble;
    });

    setBubbles(bubbleData);
  };

  // Generate bubbles on question change
  useEffect(() => {
    if (questionPacks.length && currentQIndex < questionPacks.length) {
      generateBubbles(questionPacks[currentQIndex]);
    }
  }, [currentQIndex, questionPacks]);

  // Track mouse movement to move rocket
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gameBoxRef.current) return;
      const rect = gameBoxRef.current.getBoundingClientRect();
      let mouseX = e.clientX - rect.left;
      mouseX = Math.max(20, Math.min(mouseX - 25, rect.width - 70));
      setRocketX(mouseX);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fireBullet = () => {
    // bullet initial x is relative to rocketX as before
    setBullet({ x: rocketX + 20, y: 620, speed: 15 });
  };

  // Shooting controls (space or click)
  useEffect(() => {
    const handleShoot = (e) => {
      if ((e.type === "keydown" && e.code === "Space") || e.type === "click") {
        if (!bullet && !gameOver && !won) fireBullet();
      }
    };
    window.addEventListener("keydown", handleShoot);
    window.addEventListener("click", handleShoot);
    return () => {
      window.removeEventListener("keydown", handleShoot);
      window.removeEventListener("click", handleShoot);
    };
  }, [bullet, gameOver, won, rocketX]);

  // Floating bubbles animation (gentle) and clamp above rocket
  useEffect(() => {
    const interval = setInterval(() => {
      const { maxY } = computeBubbleYBounds();
      setBubbles((prev) =>
        prev.map((b) => {
          // keep float but clamp to maxY/minY
          let newY = b.y + b.floatDir * b.speed;
          const { minY } = computeBubbleYBounds();
          if (newY < minY) {
            b.floatDir = 1;
            newY = minY;
          } else if (newY > maxY) {
            b.floatDir = -1;
            newY = maxY;
          }
          return { ...b, y: newY };
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, [questionPacks, currentQIndex, gameOver, won]);

  // Persistent-overlap resolver: if two bubbles overlap for >2s, relocate one
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const next = [...prev];
        const now = Date.now();

        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const a = next[i];
            const b = next[j];
            const dist = Math.hypot(a.x + BUBBLE_SIZE / 2 - (b.x + BUBBLE_SIZE / 2), a.y + BUBBLE_SIZE / 2 - (b.y + BUBBLE_SIZE / 2));
            const key = `${a.id}-${b.id}`;
            if (dist < BUBBLE_SIZE - 8) {
              if (!overlapMapRef.current.has(key)) {
                overlapMapRef.current.set(key, now);
              } else {
                const firstSeen = overlapMapRef.current.get(key);
                if (now - firstSeen > 2000) {
                  // relocate b
                  const { areaWidth, maxY, minY } = (() => {
                    const bounds = computeBubbleYBounds();
                    return { areaWidth: bounds.areaWidth, maxY: bounds.maxY, minY: bounds.minY };
                  })();
                  let tries = 0;
                  let nx, ny;
                  do {
                    nx = Math.max(8, Math.random() * (areaWidth - BUBBLE_SIZE - 16));
                    ny = minY + Math.random() * (maxY - minY);
                    tries++;
                  } while (
                    tries < 150 &&
                    next.some(
                      (o) =>
                        o.id !== b.id &&
                        Math.hypot(nx + BUBBLE_SIZE / 2 - (o.x + BUBBLE_SIZE / 2), ny + BUBBLE_SIZE / 2 - (o.y + BUBBLE_SIZE / 2)) <
                          BUBBLE_SIZE + 6
                    )
                  );
                  next[j] = { ...b, x: nx ?? b.x, y: ny ?? b.y, bornAt: Date.now() };
                  overlapMapRef.current.delete(key);
                }
              }
            } else {
              if (overlapMapRef.current.has(key)) overlapMapRef.current.delete(key);
            }
          }
        }
        return next;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [bubbles, questionPacks, currentQIndex]);

  // Bullet movement + hit detection with processedHitsRef to prevent double decrement
  useEffect(() => {
    if (!bullet) return;

    const interval = setInterval(() => {
      setBullet((prev) => {
        if (!prev) return null;
        const newY = prev.y - prev.speed;

        // find hit bubble index (first)
        let hitBubbleIndex = -1;
        for (let i = 0; i < bubbles.length; i++) {
          const b = bubbles[i];
          if (
            prev.x > b.x &&
            prev.x < b.x + BUBBLE_SIZE &&
            newY < b.y + BUBBLE_SIZE &&
            newY > b.y
          ) {
            hitBubbleIndex = i;
            break;
          }
        }

        if (hitBubbleIndex !== -1) {
          const hitBubble = bubbles[hitBubbleIndex];

          // If we've already processed this bubble id, just remove bullet
          if (processedHitsRef.current.has(hitBubble.id)) {
            return null; // remove bullet
          }

          // Mark processed immediately so we don't double-process
          processedHitsRef.current.add(hitBubble.id);

          // Remove the bubble immediately so it can't be hit again
          setBubbles((prevBubs) => prevBubs.filter((bb) => bb.id !== hitBubble.id));

          const correctAnswer = questionPacks[currentQIndex]?.correctAnswer;

          if (hitBubble.text === correctAnswer) {
            // Correct answer
            setBorderColor("border-green-500 shadow-[0_0_20px_#22c55e]");
            setTimeout(() => setBorderColor(""), 500);

            setScore((prevScore) => prevScore + 2);

            // Advance to next question OR if last question -> win
            setCurrentQIndex((prevIdx) => {
              const nextIdx = prevIdx + 1;
              if (nextIdx >= questionPacks.length) {
                // finished all questions in this pack
                // if attempts remain -> win
                if (attemptsLeft > 0) {
                  setWon(true);
                } else {
                  setGameOver(true);
                }
                return prevIdx; // keep index since game ended
              } else {
                return nextIdx;
              }
            });
          } else {
            // Wrong answer: decrement exactly once
            setBorderColor("border-red-500 shadow-[0_0_20px_#ef4444]");
            setTimeout(() => setBorderColor(""), 500);

            setScore((prevScore) => Math.max(prevScore - 1, 0));

            setAttemptsLeft((prevAttempts) => {
              const newAttempts = Math.max(prevAttempts - 1, 0);
              if (newAttempts <= 0) {
                setGameOver(true);
              }
              return newAttempts;
            });
          }

          // Remove bullet after processing hit
          return null;
        }

        // no hit: move bullet up normally
        if (newY <= 0) return null;
        return { ...prev, y: newY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [bullet, bubbles, currentQIndex, questionPacks, attemptsLeft]);

  const replayGame = () => {
    // reset all state cleanly
    processedHitsRef.current.clear();
    overlapMapRef.current.clear();
    setAttemptsLeft(5);
    setScore(0);
    setGameOver(false);
    setWon(false);
    setBullet(null);
    setBorderColor("");
    setCurrentQIndex(0);
    setQuestionPacks(getRandomQuestions(5));
    setBubbles([]);
  };

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div
        ref={gameBoxRef}
        className={`relative border-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${borderColor}`}
        style={{
          backgroundImage: `url(${spaceBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "900px",
          height: "700px",
        }}
      >
        {/* Question & Attempts */}
        <div className="absolute top-6 left-6 right-6 z-20">
          <div className="bg-white/6 backdrop-blur-md border border-white/8 rounded-lg px-5 py-3 flex items-center justify-between shadow-md">
            <div>
              <div className="text-sm text-gray-300">Question</div>
              <div className="text-xl md:text-2xl font-semibold text-white mt-1">
                {questionPacks[currentQIndex]?.question}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-300">Attempts left</div>
              <div className="text-lg font-bold text-white">{attemptsLeft}</div>
              <div className="text-xs text-gray-300 mt-1">Points</div>
              <div className="text-lg font-bold text-white">{score}</div>
            </div>
          </div>
        </div>

        {/* Win Popup */}
        {won && (
          <div className="absolute inset-0 flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-[#021226]/90 border border-white/10 rounded-lg px-8 py-6 shadow-2xl text-center w-96">
              <p className="text-3xl font-bold text-white mb-2">🎉 You Win!</p>
              <p className="text-xl font-semibold text-gray-200 mb-4">
                Final Score: {score}
              </p>
              <button
                onClick={replayGame}
                className="mt-2 px-5 py-2 bg-green-500 rounded hover:bg-green-600 text-white font-semibold shadow-md"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {/* Game Over Popup */}
        {gameOver && (
          <div className="absolute inset-0 flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-[#1e293b]/90 border border-white/10 rounded-lg px-8 py-6 shadow-2xl text-center w-96">
              <p className="text-3xl font-bold text-white mb-2">Game Over</p>
              <p className="text-xl font-semibold text-gray-200 mb-4">
                Final Score: {score}
              </p>
              <button
                onClick={replayGame}
                className="mt-2 px-5 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white font-semibold shadow-md"
              >
                Replay
              </button>
            </div>
          </div>
        )}

        {/* Bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xs text-center px-2 leading-tight border border-white shadow-lg"
            style={{
              background: bubble.color,
              top: bubble.y,
              left: bubble.x,
              pointerEvents: bubble.hasBeenHit ? "none" : "auto",
            }}
          >
            {bubble.text}
          </div>
        ))}

        {/* Bullet */}
        {bullet && (
          <div
            className="absolute w-2 h-6 bg-yellow-400 rounded-full shadow-lg"
            style={{ top: bullet.y, left: bullet.x }}
          ></div>
        )}

        {/* Rocket */}
        <div
          className="absolute"
          style={{
            left: rocketX,
            bottom: "60px",
            width: "50px",
            height: "100px",
          }}
        >
          <div className="relative w-12 h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-full mx-auto shadow-md">
            <div className="w-4 h-4 bg-white rounded-full absolute top-3 left-1/2 -translate-x-1/2"></div>
            <div
              className="absolute -left-3 top-10"
              style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderRight: "10px solid red",
              }}
            ></div>
            <div
              className="absolute -right-3 top-10"
              style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: "10px solid red",
              }}
            ></div>
          </div>
          <div
            className="w-0 h-0 mx-auto animate-pulse"
            style={{
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "20px solid orange",
            }}
          ></div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white p-3 text-center text-sm opacity-70">
          Move mouse to aim • Click or press Space to shoot
        </div>
      </div>
    </div>
  );
};

export default Gaming;

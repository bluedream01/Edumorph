import React, { useState, useEffect, useRef } from "react";
import spaceBg from "../assets/space.jpg";

const Gaming = () => {
  const [bubbles, setBubbles] = useState([]);
  const [bullet, setBullet] = useState(null);
  const [rocketX, setRocketX] = useState(400);
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const gameBoxRef = useRef(null);

  const questionPack = {
    question: "What is the capital of France?",
    correctAnswer: "Paris",
    options: ["London", "Berlin", "Rome", "Madrid", "Lisbon", "Vienna", "Prague", "Paris"],
  };

 const bubbleColors = [
  "radial-gradient(circle, #4facfe, #00f2fe)",  // Sky Blue
  "radial-gradient(circle, #43e97b, #38f9d7)",  // Green-Teal
  "radial-gradient(circle, #ff9966, #ff5e62)",  // Orange-Red
  "radial-gradient(circle, #a18cd1, #fbc2eb)",  // Purple-Pink
  "radial-gradient(circle, #f7971e, #ffd200)",  // Gold
];


  const generateBubbles = () => {
    const shuffled = [...questionPack.options].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);
    const bubbleData = selected.map((opt, index) => ({
      id: index,
      x: Math.random() * 700,
      y: Math.random() * 250 + 80,
      text: opt,
      color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
      floatDir: Math.random() > 0.5 ? 1 : -1,
    }));
    setBubbles(bubbleData);
  };

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

  useEffect(() => {
    const handleShoot = (e) => {
      if ((e.type === "keydown" && e.code === "Space") || e.type === "click") {
        if (!bullet && !gameOver) {
          fireBullet();
        }
      }
    };
    window.addEventListener("keydown", handleShoot);
    window.addEventListener("click", handleShoot);
    return () => {
      window.removeEventListener("keydown", handleShoot);
      window.removeEventListener("click", handleShoot);
    };
  }, [bullet, gameOver, rocketX]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev.map((b) => {
          let newY = b.y + b.floatDir * 0.8;
          if (newY < 80 || newY > 300) b.floatDir *= -1;
          return { ...b, y: newY };
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const fireBullet = () => {
    setBullet({ x: rocketX + 20, y: 620, speed: 15 });
  };

  useEffect(() => {
    if (!bullet) return;
    const interval = setInterval(() => {
      setBullet((prev) => {
        if (!prev) return null;
        const newY = prev.y - prev.speed;

        const hitBubble = bubbles.find(
          (b) =>
            prev.x > b.x &&
            prev.x < b.x + 80 &&
            newY < b.y + 60 &&
            newY > b.y
        );

        if (hitBubble) {
          if (hitBubble.text === questionPack.correctAnswer) {
            setBorderColor("border-green-500 shadow-[0_0_20px_#22c55e]");
            setMessage("🎉 You Win!");
            setGameOver(true);
          } else {
            setBorderColor("border-red-500 shadow-[0_0_20px_#ef4444]");
            setTimeout(() => setBorderColor(""), 500);
            const newAttempts = attemptsLeft - 1;
            setAttemptsLeft(newAttempts);
            if (newAttempts <= 0) {
              setMessage("💀 Game Over!");
              setGameOver(true);
            }
          }
          setBubbles((prev) => prev.filter((b) => b.id !== hitBubble.id));
          return null;
        }

        if (newY <= 0) return null;
        return { ...prev, y: newY };
      });
    }, 16);
    return () => clearInterval(interval);
  }, [bullet, bubbles, attemptsLeft]);

  const replayGame = () => {
    setAttemptsLeft(5);
    setGameOver(false);
    setMessage("");
    setBullet(null);
    setBorderColor("");
    generateBubbles();
  };

  useEffect(() => {
    generateBubbles();
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div
        ref={gameBoxRef}
        className={`relative border-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${borderColor}`}
        style={{
          backgroundImage: `url(${spaceBg})`,
          backgroundSize: "cover", // Fill completely
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
                {questionPack.question}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-300">Attempts left</div>
              <div className="text-lg font-bold text-white">{attemptsLeft}</div>
            </div>
          </div>
        </div>

        {/* Win/Fail Popup */}
        {gameOver && (
          <div className="absolute inset-0 flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-[#1e293b]/90 border border-white/10 rounded-lg px-8 py-6 shadow-2xl text-center w-96">
              <p className="text-3xl font-bold text-white mb-4">{message}</p>
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
    className="absolute w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white shadow-lg"
    style={{
      background: bubble.color,
      top: bubble.y,
      left: bubble.x,
    }}
  >
    {bubble.text}
  </div>
))}


        {/* Bullet */}
        {bullet && (
          <div
            className="absolute w-2 h-6 bg-yellow-400 rounded-full shadow-lg"
            style={{
              top: bullet.y,
              left: bullet.x,
            }}
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

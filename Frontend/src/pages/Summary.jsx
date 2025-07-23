import React, { useEffect, useState } from "react";
import "./summary.css";
// import "./index.css"
import bookImage from "../assets/book.jpg";

const Summary = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [plainText, setplainText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("Translate");
  const [translatedText, setTranslatedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [error, setError] = useState("");
  const [xpMessage, setXpMessage] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);


  //calls the summary from backend
  const SummaryCall = async () => {
    setplainText("");
    setIsLoading(true);

    setSummary("");
    setTranslatedText("");
    setError("");
    setXpMessage("");

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("/SummaryCall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url: videoLink }),
      });

      if (!response.ok) throw new Error(await response.text());

      const data = await response.json();
      setSummary(data.summary || "No summary found.");

      // ✅ XP is already updated in backend — just show success message
      setXpMessage("✅ 10 XP earned!");
      setTimeout(() => setXpMessage(""), 4000);

    } catch (err) {
      console.error("Error during summary call:", err.message);
      setSummary("Could not generate summary. Please check the URL.");
      setplainText("");
    } finally {
      setIsLoading(false); // Re-enable button
    }
  };
  //calls the translation from the backend

  const handleTranslate = async () => {
    setTranslatedText("")
    if (!summary || language === "Translate") return;
    setIsLoading(true);
    try {
      const response = await fetch("/SummaryCall/translation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ summary, language }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Server error: ${errText}`);
      }

      const json = await response.json();
      setTranslatedText(json.summary);
      setTranslatedText(json.summary.replace(/[*_#`]/g, ""));
    } catch (error) {
      console.error("Translation failed:", error.message);
      setTranslatedText("Translation failed.");
      
    } finally {
      setIsLoading(false);
    }
  };

  //for speech text
  const speakText = (text, lang = "en-US") => {
    if (!text) return;

    const synth = window.speechSynthesis;

    // Cancel if already speaking
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.5;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    synth.speak(utterance);
    setIsSpeaking(true);
  };
  //handles error for speech option
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (

    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Main */}
      <main className="pt-32 pb-16 px-4">
        <section
          className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
            summary
              ? "flex justify-center"
              : "lg:grid lg:grid-cols-2 gap-12 items-center"
          }`}
        >
          {/* Left Side */}
          <div className="space-y-6 max-w-2xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
              Summarize <span className="text-blue-500">Video Content</span>{" "}
              Instantly
            </h1>
            <p className="text-lg text-gray-400 text-center lg:text-left">
              Convert long educational videos into short, actionable insights.
            </p>

            {/* Input Section */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 space-y-4 shadow-md">
              <label className="text-sm font-medium text-gray-300">
                YouTube Video Link
              </label>
              <input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSummarize(); // 🔁 Call your custom function here
                  }
                }}
              />
              <button
                onClick={handleSummarize}
                disabled={!videoLink.trim() || isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 font-semibold text-white px-4 py-2 rounded-lg flex justify-center items-center disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Summarize Video
                  </>
                )}
              </button>
            </div>

            {error && <p className="text-red-400">{error}</p>}
            {xpMessage && (
              <p className="text-green-500 font-medium">{xpMessage}</p>
            )}

            {/* Summary */}
            {summary && (
              <div className="mt-8 bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-blue-400">Summary</h3>
                <p className="text-sm text-gray-300 whitespace-pre-wrap">
                  {summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 justify-center">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={() => speakText(summary)}
                  >
                    <Volume2 className="w-4 h-4" />
                    {isSpeaking ? "Stop" : "Speak Summary"}
                  </button>

                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-[#0f172a] border border-[#334155] px-3 py-2 rounded-lg text-sm text-white"
                  >
                    <option value="Translate" disabled>
                      Translate to...
                    </option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Mandarin">Mandarin</option>
                  </select>

                  <button
                    onClick={handleTranslate}
                    disabled={language === "Translate" || isLoading}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition ${
                      isLoading
                        ? "bg-green-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    <Languages className="w-4 h-4" />
                    {isLoading ? "Translating..." : "Translate"}
                  </button>
                </div>

                {translatedText && (
                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-green-400">
                      Translated Summary
                    </h4>
                    <p className="text-sm text-gray-300 whitespace-pre-wrap">
                      {translatedText}
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

          <div className="button-group">
            <button
              className="primary-button"
              onClick={SummaryCall}
              disabled={isLoading}
            >
              {isLoading ? "Summarizing..." : "Summarize"}
            </button>
          </div>

          {plainText && (<h2 className="section-subtitle">Summary</h2>)}
          <p className="summary-text">{plainText}</p>

          {plainText && (
            <button
              className="primary-button"
              onClick={() => speakText(plainText)}
            >
              {isSpeaking ? "🛑 Stop" : "🔊 Speak Summary"}
            </button>
          )}
        </section>

        {/* Features */}
        {!summary && (
          <section
            id="features"
            className="mt-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 transition-all duration-500"
          >
            {[
              {
                icon: <Zap className="text-white w-6 h-6" />,
                title: "Lightning Fast",
                desc: "Get summaries in under 30 seconds",
              },
              {
                icon: <FileText className="text-white w-6 h-6" />,
                title: "Smart Summaries",
                desc: "AI extracts core ideas and concepts",
              },
              {
                icon: <Clock className="text-white w-6 h-6" />,
                title: "Save Time",
                desc: "Review long content in minutes",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-[#1e293b] p-6 text-center border border-[#334155] rounded-xl hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </section>
        )}
      </main>

    </div>
  );
};

export default Summary;

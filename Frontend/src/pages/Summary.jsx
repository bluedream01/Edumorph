import { useState, useEffect } from "react";
import { Play, Volume2, Languages, Zap, FileText, Clock } from "lucide-react";
import studyImage from "../assets/study-workspace-blue.jpg";

export default function Summary() {
  const [videoLink, setVideoLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [language, setLanguage] = useState("Translate");
  const [translatedText, setTranslatedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (!videoLink.trim()) return;
    setIsLoading(true);
    setSummary("");
    setTranslatedText("");
    setError("");

    try {
      const response = await fetch("/SummaryCall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoLink }),
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      setSummary(data.summary || "No summary found.");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to summarize video.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = async () => {
    if (!summary || language === "Translate") return;
    setIsLoading(true);
    setTranslatedText("");
    try {
      const response = await fetch("/SummaryCall/translation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ summary, language }),
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      setTranslatedText(data.summary?.replace(/[*_#`]/g, "") || "");
    } catch (err) {
      console.error("Translation error:", err);
      setTranslatedText("Translation failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = (text, lang = "en-US") => {
    if (!text) return;
    const synth = window.speechSynthesis;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    synth.speak(utterance);
    setIsSpeaking(true);
  };

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* Main */}
      <main className="pt-32 pb-16 px-4">
        <section
          className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
            summary ? "flex justify-center" : "lg:grid lg:grid-cols-2 gap-12 items-center"
          }`}
        >
          {/* Left Side */}
          <div className="space-y-6 max-w-2xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
              Summarize <span className="text-blue-500">Video Content</span> Instantly
            </h1>
            <p className="text-lg text-gray-400 text-center lg:text-left">
              Convert long educational videos into short, actionable insights.
            </p>

            {/* Input Section */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 space-y-4 shadow-md">
              <label className="text-sm font-medium text-gray-300">YouTube Video Link</label>
              <input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#334155] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
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

            {/* Summary */}
            {summary && (
              <div className="mt-8 bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-blue-400">Summary</h3>
                <p className="text-sm text-gray-300 whitespace-pre-wrap">{summary}</p>

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
                    <option value="Translate" disabled>Translate to...</option>
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
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white"
                  >
                    <Languages className="w-4 h-4" />
                    Translate
                  </button>
                </div>

                {translatedText && (
                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-green-400">Translated Summary</h4>
                    <p className="text-sm text-gray-300 whitespace-pre-wrap">{translatedText}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side Image */}
          {!summary && (
            <div className="mt-12 lg:mt-0 relative transition-opacity duration-500 ease-in-out">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={studyImage}
                alt="Study workspace"
                className="relative z-10 rounded-3xl w-full shadow-lg"
              />
            </div>
          )}
        </section>

        {/* Features */}
        {!summary && (
          <section id="features" className="mt-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 transition-all duration-500">
            {[
              { icon: <Zap className="text-white w-6 h-6" />, title: "Lightning Fast", desc: "Get summaries in under 30 seconds" },
              { icon: <FileText className="text-white w-6 h-6" />, title: "Smart Summaries", desc: "AI extracts core ideas and concepts" },
              { icon: <Clock className="text-white w-6 h-6" />, title: "Save Time", desc: "Review long content in minutes" }
            ].map((f, i) => (
              <div key={i} className="bg-[#1e293b] p-6 text-center border border-[#334155] rounded-xl hover:shadow-lg">
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

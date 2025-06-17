import React, { useEffect, useState } from "react";
import "./summary.css";
import bookImage from "../assets/book.jpg";

const Summary = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [plainText, setplainText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("Translate");
  const [translatedText, setTranslatedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  //calls the summary from backend
  const SummaryCall = async () => {
    setplainText("");
    setIsLoading(true);
    try {
      const response = await fetch("/SummaryCall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Server error: ${errText}`);
      }

      const json = await response.json();
      setSummary(json.summary); // correct
      setplainText(json.summary.replace(/[*_#`]/g, "")); // use json.summary directly

      console.log(json.summary);
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
    <div className="design-root">
      <div className="layout-container">
        <main className="main-content">
          <div className="banner">
            <img src={bookImage} alt="Books and Plant" />
          </div>
          <h2 className="section-title">Summarize Video</h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Enter YouTube Video Link"
              className="text-input"
              onChange={(e) => setUrl(e.target.value)}
            />
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

          {plainText && (<div className="input-group">
            <select
              value={language}
              className="text-input"
              onChange={(e) => setLanguage(e.target.value)}
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
              <option value="Kanada">Kanada</option>
              <option value="Japanese">Japanese</option>
              <option value="Mandarin">Mandarin</option>
            </select>
          </div>)}

          {plainText && (<div className="button-group">
            <button
              className="primary-button"
              onClick={handleTranslate}
              disabled={isLoading || language === "Translate"}
            >
              {isLoading ? "Translating..." : "Translate"}
            </button>
          </div>)}

          {plainText && translatedText && (
            <>
              <h2 className="section-subtitle">Translated Summary</h2>
              <p className="summary-text">{translatedText}</p>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Summary;

import React, { useState } from "react";
import './summary.css';
import bookImage from '../assets/book.jpg';

const Summary = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [plainText, setplainText] = useState('');

  const SummaryCall = async () => {
    try {
      const response = await fetch('/SummaryCall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Server error: ${errText}`);
      }

      const json = await response.json();
      setSummary(json.summary);
      setplainText(summary.replace(/[*_#`]/g, ''));

      console.log(summary)
    } catch (err) {
      console.error("Error during summary call:", err.message);
      setSummary("Could not generate summary. Please check the URL.");

    }
  };

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
            <button className="primary-button" onClick={SummaryCall}>Summarize</button>
          </div>

          <h2 className="section-subtitle">Summary</h2>
          <p className="summary-text">{plainText}</p>

          <div className="input-group">
            <select className="text-input">
              <option value="one">Translate</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </div>

          <p className="summary-text">
            Este video explora el concepto de inteligencia artificial, sus aplicaciones en varios campos y las consideraciones éticas...
          </p>
        </main>
      </div>
    </div>
  );
};

export default Summary;

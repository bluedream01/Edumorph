import React, { useState } from "react";
import MarkmapRenderer from "./MarkmapRenderer"; // 👈 import the component
import "./flowchartgenius.css";

const FlowchartGenius = () => {
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file first.");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/SummaryCall/mindmap", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Unknown server error");
      }

      const data = await res.json();
      const raw = data.markdown || data.diagram || "";
      const cleaned = raw.replace(/```markdown\s*([\s\S]*?)\s*```/, "$1").trim();

      setMarkdown(cleaned);
    } catch (err) {
      console.error("Upload failed:", err);
      alert(`Failed to generate mind map: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flowchart-layout">
      <main className="flowchart-main">
        <h1>🧠 Generate Mind Maps from PDFs</h1>

        <div className="upload-section">
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
          <button className="upload-button" onClick={handleUpload}>Generate Mind Map</button>
          {file && <p>📄 Selected: {file.name}</p>}
        </div>

        {loading && <p>⏳ Generating mind map, please wait...</p>}

        <div className="flowchart-preview">
          {markdown ? (
            <MarkmapRenderer markdown={markdown} />
          ) : (
            !loading && (
              <>
                <p><strong>No mind map generated yet</strong></p>
                <p>Upload a PDF to generate a mind map.</p>
              </>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default FlowchartGenius;

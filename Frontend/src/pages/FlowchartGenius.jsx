import React, { useRef, useState } from "react";
import { Upload, Brain, X, FileText } from "lucide-react";
import MarkmapRenderer from "./MarkmapRenderer";

const FlowchartGenius = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setGenerated(true);
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/SummaryCall/mindmap", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error");
      }

      const data = await response.json();
      const raw = data.markdown || data.diagram || "";
      const cleaned = raw.replace(/```markdown\s*([\s\S]*?)\s*```/, "$1").trim();
      setMarkdown(cleaned);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("❌ Failed to generate mind map: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setMarkdown("");
    setGenerated(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10 font-sans">
      {/* Styling SVG inside mindmap only */}
      <style>
        {`
          .mindmap-container svg {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain;
          }
        `}
      </style>

      {/* Header */}
      <div className="text-center">
        <div className="mt-8 w-15 h-15 bg-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-wide text-white">
          AI <span className="text-blue-500 tracking-tight">Mindmap</span> Generator
        </h1>
        <p className="text-gray-400 mt-4 text-md max-w-xl mx-auto">
          Upload your study materials to generate interactive mindmaps to visualize concept and connections.
        </p>
      </div>

      {/* Upload Section */}
      <section className="mt-12 w-full px-4 max-w-2xl mx-auto">
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 bg-[#1e293b] text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />

          {!selectedFile ? (
            <div>
              <div className="w-18 h-18 bg-blue-600/20 rounded-full mx-auto flex items-center justify-center">
                <Upload className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-lg font-semibold mt-4">Upload PDF</h2>
              <p className="text-gray-400 text-sm">Drag and drop your file or click below</p>
              <button
                className="mt-5 px-5 py-2 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition"
                onClick={handleChooseFile}
              >
                Choose File
              </button>
            </div>
          ) : (
            <div>
              <div className="w-14 h-14 bg-green-600/20 rounded-full mx-auto flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-md font-semibold mt-4 text-green-400">File Selected</h2>
              <p className="text-gray-400 text-sm">{selectedFile.name}</p>

              <div className="flex flex-wrap justify-center gap-5 mt-6">
                <button
                  className="flex items-center justify-center gap-2 w-40 py-2 border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white rounded-md transition duration-300"
                  onClick={handleChooseFile}
                >
                  Change File
                </button>

                <button
                  className="flex items-center justify-center gap-2 w-40 py-2 border border-red-500 text-red-500 bg-transparent hover:bg-red-600 hover:text-white rounded-md transition duration-300"
                  onClick={handleRemoveFile}
                >
                  <X className="w-4 h-4" />
                  Remove File
                </button>
              </div>
            </div>
          )}
        </div>

        {selectedFile && (
          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-sm"
              onClick={handleUpload}
            >
              Generate Mindmap
            </button>
          </div>
        )}
      </section>

      {/* Mindmap Output Section */}
      {generated && (
        <div className="flex justify-center mt-12">
          <div
            className={`w-[900px] max-w-7xl h-[600px] p-6 rounded-xl shadow-lg border border-gray-700 relative transition-colors duration-500 ${
              markdown ? "bg-white" : "bg-[#1e293b]"
            }`}
          >
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
              {loading && (
                <p className="text-yellow-500 text-lg font-medium">
                  ⏳ Generating mind map, please wait...
                </p>
              )}

              {!loading && !markdown && (
                <div className="text-center text-gray-400">
                  <p className="font-semibold text-lg">No mind map generated yet.</p>
                  <p className="text-sm">Upload and click generate to begin.</p>
                </div>
              )}

              {markdown && (
                <div className="w-full h-full mindmap-container">
                  <MarkmapRenderer markdown={markdown} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowchartGenius;

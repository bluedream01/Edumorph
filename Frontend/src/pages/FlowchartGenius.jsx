import React from "react";
import "./flowchartgenius.css"; // Link to your custom CSS

const FlowchartGenius = () => {
  return (
    <div className="flowchart-layout">
      {/* Header */}
      {/* <header>
        <div className="logo-title">
          <div className="logo-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2>FlowchartGenius</h2>
        </div>
        <div className="nav-links">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">Support</a>
          <button className="get-started-button">Get Started</button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flowchart-main">
        <h1>Generate Flowcharts from PDFs</h1>

        {/* Upload Section */}
        <div className="upload-section">
          <p><strong>Drag and drop your PDF here</strong></p>
          <p>Or</p>
          <button className="upload-button">Browse Files</button>
        </div>

        {/* Flowchart Preview */}
        <div className="flowchart-preview">
          <div
            className="flowchart-image"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBw6NvuVtJ7AuZDegQlmh2xhZK0niZrVSj-9ztQii7hAwRrGNED20hjSHxHZEJbi2TROl75wIZ-icMWKplV5wxr8YUYx7SxVPSNHl6b2ZQmrGYP9MHzvLeAm5-RvxxhKvRDX93bp2asBTPx_7qTYIqdMljcISkwBE6AxESElwccYZsuUUqBG_Ur2tnsg8u_nEv3Mm8WtC6EQeEwHl6TWXZOHms7Wpr6hOPCSNlZnSsQ-xIMtC_6NWrr7dqMHVlgtpSYt4lL6NVpgO66")',
            }}
          ></div>
          <p><strong>No flowchart generated yet</strong></p>
          <p>Upload a PDF to generate a flowchart.</p>
        </div>
      </main>
    </div>
  );
};

export default FlowchartGenius;

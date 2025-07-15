import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import logoIcon from "../../assets/edumorph.svg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:4000/api/chatbot/ask", {
        message: input,
      });
      

      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't answer that." },
      ]);
       
    }
    
    
  };

  return (
    <>
      <button className="chatbot-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={logoIcon} alt="Chatbot Icon" className="chatbot-icon" />
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">EduBot 🤖</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-msg ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me something..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
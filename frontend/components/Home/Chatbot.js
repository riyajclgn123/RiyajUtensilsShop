"use client";
import React, { useState } from "react";
import { sendMessageToBot } from "../../app/utils/chatbot";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = await sendMessageToBot(input);
    const botMsg = { sender: "bot", text: botReply || "No response." };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      ) : (
        <div className="bg-black rounded-xl shadow-xl w-80 h-[500px] flex flex-col text-white">
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-900 text-white px-4 py-2 rounded-t-xl">
            <span className="font-semibold">Riyaj Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-black">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-700 flex items-center gap-2 bg-black">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 px-3 py-1 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

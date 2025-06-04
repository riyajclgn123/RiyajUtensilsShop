"use client";
import React, { useState } from "react";
import { sendMessageToBot } from "@/app/utils/chatbot";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = await sendMessageToBot(input);
    const botMsg = { sender: "bot", text: botReply };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">Riyaj Chatbot</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-3 bg-white">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <p className="inline-block bg-gray-100 px-3 py-1 rounded my-1">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

// /components/Chatbot.js
import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
const res = await fetch("https://your-app-name.onrender.com/api/chat", {
  method: "POST",
  body: JSON.stringify({ message: userMessage }),
  headers: { "Content-Type": "application/json" },
});

    const data = await res.json();
    setMessages([...messages, { user: input }, { bot: data.reply }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 w-80 h-96 overflow-y-scroll">
      {messages.map((m, i) => (
        <div key={i}>
          <b>{m.user ? 'You' : 'Bot'}:</b> {m.user || m.bot}
        </div>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} className="w-full mt-2" />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-2 py-1 mt-2 rounded">Send</button>
    </div>
  );
}

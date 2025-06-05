require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { VertexAI } = require("@google-cloud/vertexai");

const app = express();

// ✅ CORS Setup (only allow your frontend domain)
app.use(
  cors({
    origin: "https://riyaj-utensils-shop.vercel.app",
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Vertex AI Setup
const projectId = "riyaj-utensils-shop-18067";
const location = "us-central1";
const modelName = "gemini-2.0-flash-001";

// VertexAI Auth — recommend setting GOOGLE_APPLICATION_CREDENTIALS via Render Dashboard
const vertexAI = new VertexAI({ project: projectId, location });
const generativeModel = vertexAI.getGenerativeModel({ model: modelName });

// ✅ /api/chat endpoint
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const chat = generativeModel.startChat({});
    const result = await chat.sendMessageStream(message);

    let responseText = "";
    for await (const item of result.stream) {
      const part = item?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (part) responseText += part;
    }

    return res.json({ reply: responseText });
  } catch (error) {
    console.error("❌ Vertex AI Error:", error.message);
    return res.status(500).json({ error: "Failed to generate response" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

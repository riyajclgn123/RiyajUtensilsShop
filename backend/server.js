require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { VertexAI } = require("@google-cloud/vertexai");

// Set service account key path
process.env.GOOGLE_APPLICATION_CREDENTIALS = "key.json";

// Setup Express app
const app = express();
app.use(cors({
  origin: "https://riyaj-utensils-shop.vercel.app",
   methods: ["POST"],
    credentials: true, // ✅ Your Vercel frontend URL
}));
app.use(express.json());

// Vertex AI config
const projectId = "riyaj-utensils-shop-18067";
const location = "us-central1";
const modelName = "gemini-2.0-flash-001";

// Initialize Vertex AI
const vertexAI = new VertexAI({ project: projectId, location });
const generativeModel = vertexAI.getGenerativeModel({ model: modelName });

// Chat endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const chat = generativeModel.startChat({});
    const result = await chat.sendMessageStream(message);

    let responseText = "";
    for await (const item of result.stream) {
      const part = item?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (part) responseText += part;
    }

    res.json({ reply: responseText }); // 🛠 match frontend expectation
  } catch (error) {
    console.error("❌ Error from Vertex AI:", error.message);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

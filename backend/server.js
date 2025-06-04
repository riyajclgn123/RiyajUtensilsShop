process.env.GOOGLE_APPLICATION_CREDENTIALS = "key.json";
require("dotenv").config();
const express = require("express");
const { VertexAI } = require("@google-cloud/vertexai");
const cors = require("cors");

app.use(cors());

const app = express();
app.use(express.json());

const projectId = "riyaj-utensils-shop-18067"; // ✅ Replace if needed
const location = "us-central1";
const modelName = "gemini-2.0-flash-001"; // ✅ FREE and public model

// Initialize Vertex AI
const vertexAI = new VertexAI({ project: projectId, location });
const generativeModel = vertexAI.getGenerativeModel({ model: modelName });

// POST endpoint to handle chat requests
app.post("/chat", async (req, res) => {
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

    res.json({ response: responseText });
  } catch (error) {
    console.error("❌ Error from Vertex AI:", error.message);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

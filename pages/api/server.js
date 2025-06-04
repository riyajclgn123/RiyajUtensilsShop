const express = require("express");
const cors = require("cors");
require("dotenv").config();
process.env.GOOGLE_APPLICATION_CREDENTIALS = "./key.json";

const { VertexAI } = require("@google-cloud/aiplatform");
const app = express();
app.use(cors());
app.use(express.json());

const vertexAI = new VertexAI({ project: "your-project-id", location: "us-central1" });
const model = vertexAI.preview.languageModels().getModel("chat-bison");

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;
  const result = await model.generateMessage({
    contents: [{ role: "user", parts: [{ text: userMessage }] }],
  });
  res.json({ reply: result.candidates[0].content.parts[0].text });
});

app.listen(3001, () => console.log("Running on http://localhost:3001"));

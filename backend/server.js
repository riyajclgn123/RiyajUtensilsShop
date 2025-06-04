const express = require('express');
const cors = require('cors');
const { VertexAI } = require('@google-cloud/aiplatform');
const { GoogleAuth } = require('google-auth-library');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const project = process.env.PROJECT_ID;
const location = 'us-central1';

const vertexAi = new VertexAI({
  projectId: project,
  location,
  googleAuthOptions: {
    keyFile: 'key.json',
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
  },
});

const textClient = new vertexAi.preview.languageModels.ChatServiceClient();

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const request = {
    model: 'chat-bison',
    messages: [{ content: message }],
    temperature: 0.7,
  };

  try {
    const [response] = await textClient.chat(request);
    res.json({ reply: response.candidates[0].content });
  } catch (error) {
    console.error('Vertex AI Error:', error.message);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

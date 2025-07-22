const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ result: "Prompt is empty." });
  }

  // Simulated GPT response
 const fakeResponse = `Sure! Here's what I think:\n\n"${prompt}" sounds interesting. Here's my take:\n- Point 1...\n- Point 2...\n- Conclusion...`;

  res.json({ result: fakeResponse });
});

app.listen(5000, () => console.log("🔥 Dummy backend running on port 5000"));


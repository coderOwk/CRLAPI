import express from "express";
import fetch from "node-fetch";

const app = express();

// your Clash Royale token here:
const TOKEN = "YOUR_SUPERCELL_API_TOKEN_HERE";

app.get("/player/:id", async (req, res) => {
  const playerId = req.params.id;
  const url = `https://api.clashroyale.com/v1/players/%23${playerId}`;

  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer " + TOKEN
    }
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Proxy running"));

import express from "express";
import fetch from "node-fetch";

const app = express();

// your Clash Royale token here:
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY2MGJjMTRmLWVmNWQtNDQ5Mi04YTQ0LWM0NTEwMzYwNGFjZiIsImlhdCI6MTc1NjgxMjUzMywic3ViIjoiZGV2ZWxvcGVyLzMyZTMxNzBjLTg1NmEtYjBkMC02ZWIyLWY2YjU4YTcwYTZlYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzYuMjM0LjguMTc4Il0sInR5cGUiOiJjbGllbnQifV19.I_d3iM3f975DkVt3ncUE0zYlbkvEWUEY7QTi_yXjZl8siOlvBd9YR68IA2rLViEHfAuM4v4WyBV8fP--Cev0TA";

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

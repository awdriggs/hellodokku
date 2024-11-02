import express from 'express';
const app = express();
import dotenv from 'dotenv';
const port = process.env.PORT || 3000;

// Secrets
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello, Dokku!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hallo, deine Backend-App läuft!');
});

app.post('/chat', async (req, res) => {
  res.json({ reply: "Hallo von deinem Backend!" });
});

app.listen(port, () => {
  console.log(`Backend läuft auf http://localhost:${port}`);
});

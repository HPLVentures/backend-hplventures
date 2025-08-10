import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
    res.json({ reply: "Hallo von deinem Backend!" });
});

app.listen(3000, () => {
    console.log("Backend läuft auf http://localhost:3000");
});

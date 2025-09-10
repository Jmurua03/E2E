import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };

  if (username === 'admin' && password === '1234') {
    res.json({ success: true, username });
  } else {
    res
      .status(401)
      .json({ success: false, message: 'Credenciales incorrectas' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

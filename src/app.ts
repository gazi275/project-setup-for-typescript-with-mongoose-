import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('hello World');
});
export default app;

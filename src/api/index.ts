import cors from 'cors';
import express from 'express';
import getBillboard from './routes/get-billboard';
import instructDrone from './routes/instruct-drone';

const app = express();

app.use(cors());

app.get('/instruct-drone', instructDrone);
app.get('/get-billboard', getBillboard);

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));

export default app;

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`order Service listening on port ${port}`);
});
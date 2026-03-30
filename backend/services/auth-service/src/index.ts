import express from 'express';

const app = express();
const port = process.env.PORT


app.listen(port, () => {
    console.log('Auth Service listening on port 3000');
});
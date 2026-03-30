import express from 'express';


const app = express();
const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Product Service listening on port ${port}`);
});
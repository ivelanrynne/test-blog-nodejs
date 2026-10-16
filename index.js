import express from 'express';

const app = express();
const port = process.env.PORT || 5002;

app.get('/', (req, res) => {
    res.send('Hello World!, This is a simple Express server running on port 5002.');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
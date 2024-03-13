const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, This is a test web application !');
});

app.listen(port, () => {
    console.log(`Servier is running at http://localhost:${port}`);
});

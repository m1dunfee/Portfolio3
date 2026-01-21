const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('ok').status(200)
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`) //backticks for injection
})
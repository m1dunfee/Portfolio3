const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

let indexRouter = require('./routes/index')

app.use('/api', indexRouter)

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`) //backticks for injection
})


require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

require("./models/hydration/hydrationStation");

let indexRouter = require('./routes/index')

app.use('/api', indexRouter)

app.listen(port, "0.0.0.0", () => {
    console.log(`listening on port ${port}`) //backticks for injection
});


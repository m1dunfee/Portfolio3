require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

async function connectDb() {
    await mongoose. connect(process.env.MONGO_URI);
    console.log('Mongo connected');
};

connectDb().catch((e) => {
  console.error("Mongo connection failed:", e);
  process.exit(1);
});

let indexRouter = require('./routes/indexRoute');
let projectsRouter = require('./routes/projcetsRoute');
let booksRouter = require('./routes/booksRoute');
let prospectsRouter = require('./routes/prospectsRoute');
let topicsRouter = require('./routes/topicsRoute');

app.use('/api', indexRouter);
app.use('/api', projectsRouter);
app.use('/api', booksRouter);
app.use('/api', prospectsRouter);
app.use('/api', topicsRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`listening on port ${port}`); //backticks for injection
});


//proper shutdown
async function shutdown(signal) {
  console.log(`Received ${signal}, shutting down...`);
  app.close(async () => {
    try {
      await mongoose.disconnect();
      console.log("Mongo disconnected");
    } catch (e) {
      console.error("Error during mongo disconnect:", e);
    } finally {
      process.exit(0);
    }
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));   // Ctrl+C
process.on("SIGTERM", () => shutdown("SIGTERM")); // Docker stop
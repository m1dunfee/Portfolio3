require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//runs seeding on import because main()
//require("./models/hydration/hydrationStation");

async function connectDb() {
    await mongoose. connect(process.env.MONGO_URI);
    console.log('Mongo connected');
};

connectDb().catch((e) => {
  console.error("Mongo connection failed:", e);
  process.exit(1);
});

let indexRouter = require('./routes/indexRoute');
let projectRouter = require('./routes/projcetRoute');

app.use('/api', indexRouter);
app.use('/api', projectRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`listening on port ${port}`); //backticks for injection
});


//proper shutdown
async function shutdown(signal) {
  console.log(`Received ${signal}, shutting down...`);
  server.close(async () => {
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
require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

const app = express();

// ----- Config -----
const port = process.env.PORT || 5000;

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://data-tide.net",
  //'https://data-tide.net'
];

const JSON_LIMIT = "1mb";
const WINDOW_MS = 60 * 1000;
const MAX_REQ = 120;

// ----- Security middleware (baseline) -----

app.use(helmet());

// ----- CORS allowlist (browser protection) -----
app.use(
  cors({
    origin: (origin, cb) => {
      // Allow non-browser clients with no Origin header (curl, server-to-server)
      if (!origin) return cb(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      return cb(new Error("CORS blocked: " + origin));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// ----- Body parsing with size limits -----
app.use(express.json({ limit: JSON_LIMIT }));
app.use(express.urlencoded({ extended: false, limit: JSON_LIMIT }));

app.use(
  "/api",
  rateLimit({
    windowMs: WINDOW_MS,
    max: MAX_REQ,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);


// ----- DB -----
async function connectDb() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Mongo connected");
}

connectDb().catch((e) => {
  console.error("Mongo connection failed:", e);
  process.exit(1);
});


// ----- Routers -----
let indexRouter = require("./routes/indexRoute");
let projectsRouter = require("./routes/projcetsRoute");
let booksRouter = require("./routes/booksRoute");
let prospectsRouter = require("./routes/prospectsRoute");
let topicsRouter = require("./routes/topicsRoute");
let collectionRouter = require('./routes/collectionRoute');

// app.use("/api", indexRouter);
// app.use("/api", projectsRouter);
// app.use("/api", booksRouter);
// app.use("/api", prospectsRouter);
// app.use("/api", topicsRouter);

app.use('/api', collectionRouter);

// ----- Central error handler (keep last) -----
app.use((err, req, res, next) => {
  // CORS errors and other "expected" errors should be 400-level
  if (String(err.message || "").startsWith("CORS blocked:")) {
    return res.status(403).json({ ok: false, error: "CORS blocked" });
  }

  console.error(err);
  res.status(500).json({ ok: false, error: "Server error" });
});

// ----- Listen -----
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`listening on port ${port}`); //backticks for injection
});

// ----- proper shutdown -----
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

process.on("SIGINT", () => shutdown("SIGINT")); // Ctrl+C
process.on("SIGTERM", () => shutdown("SIGTERM")); // Docker stop

import express from "express";
import cors from "cors";

import HealthCheck from "./src/routes/health.routes.js";
import uploadRes from "./src/routes/upload.route.js";

const app = express();

// CORS FIX
app.use(
  cors({
    origin: ["https://mockmate-rho.vercel.app"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Routes
app.use("/api", HealthCheck);
app.use("/api", uploadRes);

// 🚀 IMPORTANT: Do NOT use app.listen()
// Vercel will handle the server for you.

export default app;

import express from "express";
import cors from "cors";
import HealthCheck from "../src/routes/health.routes.js";
import uploadRes from "../src/routes/upload.route.js";

const app = express();

app.use(cors({
  origin: ["https://mockmate-rho.vercel.app"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.use("/api", HealthCheck);
app.use("/api", uploadRes);

// Export for Vercel (NO app.listen)
export default app;

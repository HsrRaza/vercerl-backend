import express from "express"
import cors from "cors"
import HealthCheck from "./routes/health.routes.js"
import uploadRes from "./routes/upload.route.js"

const app = express()
const PORT = 4000

app.use(cors({
    origin: ["https://mockmate-rho.vercel.app"],
    methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    credentials: true
}));
app.use(express.json())

app.use("/api", HealthCheck)
app.use('/api', uploadRes)

app.listen(PORT,()=>{
  console.log(`Server is listening in port ${PORT}`);
  
})
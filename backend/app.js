import express from "express";
import cookieParser from "cookie-parser";
import patientRoutes from "./routes/patient.route.js";
import recordRoutes from "./routes/record.route.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // replace with your frontend URL
  credentials: true, // Allow cookies and credentials
};

app.use(cors(corsOptions));

// morgan to log requests
// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/checkhealth", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Set headers to allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/patients", patientRoutes);

app.use("/records", recordRoutes);

export default app;

import express from "express";
import cookieParser from "cookie-parser";
import patientRoutes from "./routes/patient.route.js";
import recordRoutes from "./routes/record.route.js";

const app = express();

// morgan to log requests
// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/checkhealth", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/patients", patientRoutes);

app.use("/records", recordRoutes);

export default app;

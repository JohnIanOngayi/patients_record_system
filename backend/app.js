import express from "express";

const app = express();

// morgan to log requests
// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get("/checkhealth", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;

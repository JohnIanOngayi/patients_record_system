import connectMongoDB from "./db/connect.db.js";
import { config } from "dotenv";
import app from "./app.js";

config();
const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/PatientsRecord";
const API_PORT = process.env.API_PORT || 5000;

// connecting to mongoDB
connectMongoDB(DB_URI, app, API_PORT);

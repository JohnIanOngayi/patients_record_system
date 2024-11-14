import jwt from "jsonwebtoken";
import { fetchPatient } from "../controllers/patient.controller.js";
import { getPatient } from "../services/patient.service.js";

export async function requirePatient(req, res, next) {
  try {
    // jwt cookie value from current session request
    const token = req.cookies.jwt;
    console.log(`Token`, token);
    if (!token)
      return res.status(401).json({ error: "Failed No Attached Patient" });
    console.log("jwt", process.env.JWT_SECRET);

    // check if token is valid token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });

    // Find attach(relate) patient to current session
    const patient = await getPatient({ _id: decoded.patientID });
    // if (!patient)
    // return res.status(401).json({ error: "Unauthorized: Invalid Token" });

    req.patient = patient;
    next();
  } catch (error) {
    // if (error.name === "JsonWebTokenError") {
    //   return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    // } else {
    console.error(`requirePatient Middleware Error: ${error.message}`);
    next(error);
    // }
  }
}

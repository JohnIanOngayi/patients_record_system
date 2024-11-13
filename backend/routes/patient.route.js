import { Router } from "express";
import {
  registerPatient,
  fetchAllPatients,
  fetchPatient,
} from "../controllers/patient.controller.js";

const patientRoutes = Router();

patientRoutes.post("/", registerPatient);

patientRoutes.get("/", fetchAllPatients);

patientRoutes.get("/:id", fetchPatient);

export default patientRoutes;

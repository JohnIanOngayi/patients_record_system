import { Router } from "express";
import {
  registerRecord,
  fetchRecord,
  fetchAllRecords,
  fetchPatientRecords,
} from "../controllers/record.controller.js";
import { requirePatient } from "../middleware/requirePatient.js";

const recordRoutes = Router();

recordRoutes.post("/", requirePatient, registerRecord);

recordRoutes.get("/", fetchAllRecords);

recordRoutes.get("/:_id", fetchAllRecords);

recordRoutes.get("/patient/:_id", fetchPatientRecords);

export default recordRoutes;

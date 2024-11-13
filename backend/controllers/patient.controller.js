import {
  addPatient,
  getAllPatients,
  getPatient,
} from "../services/patient.service.js";
import { generateTokenandSetCookie } from "../utils/generateAndSetCookie.js";
import logger from "../utils/logger.js";

export async function registerPatient(req, res) {
  try {
    const nationalID = req.body.nationalID;

    const existingPatient = await getPatient({ nationalID });
    if (existingPatient) {
      generateTokenandSetCookie(existingPatient._id, res);
      return res.send("Patient found in DB");
    }

    const newPatient = await addPatient(req.body);
    generateTokenandSetCookie(newPatient._id, res);
    res.send(newPatient);
  } catch (error) {
    logger.error(`registerPatient Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

export async function fetchAllPatients(req, res) {
  try {
    const patients = await getAllPatients();
    res.send(patients);
  } catch (error) {
    logger.error(`fetchAllPatients Controller Error: ${error}`);
  }
}

export async function fetchPatient(req, res) {
  const { id } = req.params;
  const patient = await getPatient({ _id: id });
  res.send(patient);
}

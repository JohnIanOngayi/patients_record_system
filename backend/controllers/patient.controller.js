import {
  addPatient,
  getAllPatients,
  getPatient,
} from "../services/patient.service.js";
import logger from "../utils/logger.js";

export async function registerPatient(req, res) {
  try {
    const newPatient = await addPatient(req.body);
    res.send(newPatient);
  } catch (error) {
    logger.error(`registerPatient Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

export async function fetchAllPatients(req, res) {}

export async function fetchPatient(req, res) {}

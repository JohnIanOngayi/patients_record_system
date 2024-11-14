import {
  addPatient,
  getAllPatients,
  getPatient,
} from "../services/patient.service.js";
import { generateTokenandSetCookie } from "../utils/generateAndSetCookie.js";
import logger from "../utils/logger.js";

/**
 * Registers a new patient or retrieves an existing patient based on the national ID.
 *
 * If a patient with the given national ID already exists, a JWT token is generated
 * and set as a cookie, and a message indicating the patient is found in the database
 * is sent in the response. If no such patient exists, a new patient is created,
 * a JWT token is generated and set as a cookie, and the new patient details are
 * sent in the response.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.body - The request body containing patient details.
 * @param {string} req.body.nationalID - The patient's national ID.
 * @param {Object} res - The HTTP response object.
 */
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
    res.status(201).send(newPatient);
  } catch (error) {
    logger.error(`registerPatient Controller Error: ${error}`);
    res.sendStatus(500);
  }
}


/**
 * Retrieves all patients from the database and sends them in the response.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object used to send the patients data.
 *
 * If successful, sends a list of patients with a 200 status code.
 * Logs an error if the operation fails.
 */

export async function fetchAllPatients(req, res) {
  try {
    const patients = await getAllPatients();
    res.send(patients);
  } catch (error) {
    logger.error(`fetchAllPatients Controller Error: ${error}`);
  }
}


/**
 * Retrieves a patient from the database using the provided ID.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object used to send the patient data.
 *
 * If successful, sends the patient data with a 200 status code.
 * Logs an error if the operation fails.
 */
export async function fetchPatient(req, res) {
  const { id } = req.params;
  const patient = await getPatient({ _id: id });
  res.send(patient);
}

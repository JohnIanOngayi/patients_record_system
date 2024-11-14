import Patient from "../models/patient.model.js";
import logger from "../utils/logger.js";

/**
 * Creates a new patient in the database.
 *
 * @param {Object} input - Data for new patient.
 * @param {string} input.firstName - Patient's first name.
 * @param {string} input.lastName - Patient's last name.
 * @param {string} input.nationalID - Patient's national ID number.
 * @param {string} input.dateOfBirth - Patient's date of birth.
 * @param {string} input.gender - Patient's gender.
 *
 * @returns {Promise<Patient>} The newly created patient.
 */
export async function addPatient(input) {
  const { firstName, lastName, nationalID, dateOfBirth, gender } = input;
  console.log(dateOfBirth);
  const date = new Date(dateOfBirth);
  try {
    const newPatient = await Patient.create({
      firstName,
      lastName,
      nationalID,
      dateOfBirth: date,
      gender,
    });
    return newPatient;
  } catch (error) {
    logger.error(`addPatient Service Error: ${error}`);
    throw new Error(error);
  }
}

/**
 * Finds all patients in the database that match the given query.
 *
 * @param {Object} query - MongoDB query to filter patients by.
 *
 * @returns {Promise<Patient[]>} An array of patient objects.
 */
export async function getAllPatients(query) {
  try {
    const patients = await Patient.find(query);
    return patients;
  } catch (error) {
    logger.error(`getAllPatients Service Error: ${error}`);
    throw new Error(error);
  }
}

/**
 * Finds a single patient in the database that matches the given query.
 *
 * @param {Object} query - MongoDB query to filter patients by.
 *
 * @returns {Promise<Patient>} A patient object with its associated records populated.
 */
export async function getPatient(query) {
  try {
    const patient = await Patient.findOne(query).populate("records");
    return patient;
  } catch (error) {
    logger.error(`getPatient Service Error: ${error}`);
    throw new Error(error);
  }
}

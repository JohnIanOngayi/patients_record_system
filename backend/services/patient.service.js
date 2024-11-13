import Patient from "../models/patient.model.js";
import logger from "../utils/logger.js";

export async function addPatient(input) {
  const { firstName, lastName, nationalID, dateOfbirth, gender } = input;
  const date = new Date(input.dateOfBirth);
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

export async function getAllPatients(query) {
  try {
    const patients = await Patient.find(query);
    return patients;
  } catch (error) {
    logger.error(`getAllPatients Service Error: ${error}`);
    throw new Error(error);
  }
}

export async function getPatient(query) {
  try {
    const patient = await Patient.findOne(query);
    return patient;
  } catch (error) {
    logger.error(`getPatient Service Error: ${error}`);
    throw new Error(error);
  }
}

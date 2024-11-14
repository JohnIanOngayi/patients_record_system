import {
  addRecord,
  getAllRecords,
  getRecord,
} from "../services/record.service.js";
import logger from "../utils/logger.js";

/**
 * Registers a new record for a patient in the database.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object used to send the newly created record.
 *
 * If successful, sends the newly created record with a 201 status code.
 * Logs an error if the operation fails.
 */
export async function registerRecord(req, res) {
  try {
    // if (req.patient) {
    //   return res.send(req.patient);
    // }
    const newRecord = await addRecord(req);
    res.status(201).send(newRecord);
  } catch (error) {
    logger.error(`registerRecord Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

/**
 * Retrieves all records from the database and sends them in the response.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object used to send the records data.
 *
 * If successful, sends a list of records with a 200 status code.
 * Logs an error if the operation fails.
 */
export async function fetchAllRecords(req, res) {
  try {
    const records = await getAllRecords();
    res.status(200).send(records);
  } catch (error) {
    logger.error(`fetchAllRecords Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

/**
 * Retrieves a specific record from the database using the provided record ID.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params._id - The ID of the record to retrieve.
 * @param {Object} res - The HTTP response object used to send the record data.
 *
 * If successful, sends the record data with a 200 status code.
 * Logs an error and sends a 500 status code if the operation fails.
 */
export async function fetchRecord(req, res) {
  try {
    const { _id } = req.params;
    const record = await getRecord({ _id });
    res.status(200).send(record);
  } catch (error) {
    logger.error(`fetchRecord Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

/**
 * Retrieves records for a specific patient or based on a date from the database.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params._id - The ID of the patient to retrieve records for.
 * @param {string} [req.params.date] - The date to filter records by (optional).
 * @param {Object} res - The HTTP response object used to send the records data.
 *
 * If a patient ID is provided, sends the patient's records with a 200 status code.
 * If a date is provided, sends records for that date with a 200 status code.
 * Logs an error if the operation fails.
 */
export async function fetchPatientRecords(req, res) {
  try {
    const patient = req.params._id;
    if (patient) {
      const records = await getAllRecords({ patient });
      return res.status(200).send(records);
    }
    const date = req.params.date;
    if (date) {
      const records = await getAllRecords({ patient });
      return res.status(200).send(records);
    }
  } catch (error) {
    logger.error(`fetchRecordsByPatient Controller Error: ${error}`);
  }
}

import Record from "../models/record.model.js";
import logger from "../utils/logger.js";

/**
 * Creates a new record in the database.
 *
 * @param {Object} input - Data for new record.
 * @param {Object} input.body - Data for new record.
 * @param {string} input.body.date - Date of record (YYYY-MM-DD).
 * @param {number} input.body.height - Patient's height in cm.
 * @param {number} input.body.weight - Patient's weight in kg.
 * @param {number} input.body.bmi - Patient's body mass index.
 * @param {string} input.body.generalHealth - Patient's general health.
 * @param {string} input.body.secondaryQuestion - Patient's response to secondary
 *   question.
 * @param {string} input.body.comment - Doctor's comment.
 * @param {Object} input.patient - Patient object.
 *
 * @returns {Promise<Record>} The newly created record.
 */
export async function addRecord(input) {
  try {
    const { patient } = input;
    console.log(patient);
    const {
      date,
      height,
      weight,
      bmi,
      generalHealth,
      secondaryQuestion,
      comment,
    } = input.body;
    const _date = new Date(date);
    const newRecord = await Record.create({
      patient: patient._id,
      date: _date,
      height,
      weight,
      BMI: bmi,
      generalHealth,
      secondaryQuestion,
      comment,
    });
    return newRecord.populate("patient");
  } catch (error) {
    logger.error(`addRecord Service Error: ${error}`);
    throw new Error(error);
  }
}

/**
 * Finds all records in the database that match the given query.
 *
 * @param {Object} query - MongoDB query to filter records by.
 *
 * @returns {Promise<Record[]>} An array of record objects.
 */
export async function getAllRecords(query) {
  try {
    const records = await Record.find(query)
      .populate("patient")
      .sort({ createdAt: -1 });
    return records;
  } catch (error) {
    logger.error(`getAllRecords Service Error: ${error}`);
    throw new Error(error);
  }
}

/**
 * Finds a single record in the database that matches the given query.
 *
 * @param {Object} query - MongoDB query to filter records by.
 *
 * @returns {Promise<Record>} A record object.
 */
export async function getRecord(query) {
  try {
    const record = await Record.findOne(query).populate("patient");
    return record;
  } catch (error) {
    logger.error(`getRecord Service Error: ${error}`);
    throw new Error(error);
  }
}

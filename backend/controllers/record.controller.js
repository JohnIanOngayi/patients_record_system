import {
  addRecord,
  getAllRecords,
  getRecord,
} from "../services/record.service.js";
import logger from "../utils/logger.js";

export async function registerRecord(req, res) {
  try {
    // if (req.patient) {
    //   return res.send(req.patient);
    // }
    const newRecord = await addRecord(req);
    res.send(newRecord);
  } catch (error) {
    logger.error(`registerRecord Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

export async function fetchAllRecords(req, res) {
  try {
    const records = await getAllRecords();
    res.status(200).send(records);
  } catch (error) {
    logger.error(`fetchAllRecords Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

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

export async function fetchPatientRecords(req, res) {
  try {
    const patient = req.params._id;
    const records = await getAllRecords({ patient });
    res.status(200).send(records);
  } catch (error) {
    logger.error(`fetchRecordsByPatient Controller Error: ${error}`);
  }
}

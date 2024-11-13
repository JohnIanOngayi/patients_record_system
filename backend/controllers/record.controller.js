import {
  addRecord,
  getAllRecords,
  getRecord,
} from "../services/record.service.js";

export async function registerRecord(req, res) {
  try {
    // if (req.patient) {
    //   return res.send(req.patient);
    // }
    const newRecord = await addRecord(req);
    res.send(newPatient);
  } catch (error) {
    logger.error(`registerPatient Controller Error: ${error}`);
    res.sendStatus(500);
  }
}

export async function fetchAllRecords(req, res) {}

export async function fetchRecord(req, res) {}

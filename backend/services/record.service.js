import Record from "../models/record.model.js";
import logger from "../utils/logger.js";

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

export async function getRecord(query) {
  try {
    const record = await Record.findOne(query).populate("patient");
    return record;
  } catch (error) {
    logger.error(`getRecord Service Error: ${error}`);
    throw new Error(error);
  }
}

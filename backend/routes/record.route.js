import { Router } from "express";
import {
  registerRecord,
  fetchRecord,
  fetchAllRecords,
} from "../controllers/record.controller.js";

const recordRoutes = Router();

recordRoutes.post("/", registerRecord);

recordRoutes.get("/", fetchAllRecords);

recordRoutes.get("/:id", fetchAllRecords);

export default recordRoutes;

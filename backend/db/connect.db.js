import mongoose from "mongoose";
import logger from "../utils/logger.js";

async function connectMongoDB(uri, app, port) {
  mongoose
    .connect(uri)
    .then(() => {
      logger.info("Successfully connected to db");

      app.listen(port, () => {
        logger.info(`Server is listening on port ${port}`);
      });
    })
    .catch(() => {
      logger.error("db connection failed");
    });
}

export default connectMongoDB;

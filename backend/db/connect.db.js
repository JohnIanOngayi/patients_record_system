import mongoose from "mongoose";
import logger from "../utils/logger.js";

/**
 * Connects to a MongoDB database and starts the Express server.
 *
 * @param {string} uri - The MongoDB connection string.
 * @param {Object} app - The Express application instance.
 * @param {number} port - The port number on which the server should listen.
 *
 * Logs information about successful database connection
 * and server startup, or an error message if the connection fails.
 */
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

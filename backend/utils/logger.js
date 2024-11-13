import logger from "pino";
import pretty from "pino-pretty";
import dayjs from "dayjs";

const prettyStream = pretty({
  colorize: true,
  translateTime: true,
  ignore: "pid,hostname",
});

const log = logger(prettyStream);

export default log;

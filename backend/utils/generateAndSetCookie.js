import jwt from "jsonwebtoken";

export const generateTokenandSetCookie = async (patientID, res) => {
  const token = jwt.sign({ patientID }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
  res.cookie("jwt", token, {
    maxAge: 30 * 60 * 1000,
    sameSite: "lax",
    secure: process.env.ENVIRONMENT !== "dev",
    httpOnly: true,
    path: "/",
  });
};

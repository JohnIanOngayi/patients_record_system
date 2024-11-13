import jwt from "jsonwebtoken";

export const generateTokenandSetCookie = async (patientID, res) => {
  const token = jwt.sign({ patientID }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: process.env.COOKIE_AGE || 30 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.ENVIRONMENT != "dev",
  });
};

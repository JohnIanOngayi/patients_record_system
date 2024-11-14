import jwt from "jsonwebtoken";

/**
 * Generates a JWT token for a given patient ID and sets it as a cookie in the response.
 *
 * @param {string} patientID - The ID of the patient for whom the token is generated.
 * @param {Object} res - The HTTP response object used to set the cookie.
 *
 * The generated token expires in 30 minutes and is set as a cookie with
 * properties that enhance security, such as 'httpOnly' and 'secure' (in non-dev environments).
 */
export const generateTokenandSetCookie = async (patientID, res) => {
  const token = jwt.sign({ patientID }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
  res.cookie("jwt", token, {
    maxAge: 30 * 60 * 1000,
    sameSite: "lax",
    secure: process.env.ENVIRONMENT !== "dev",
    httpOnly: true,
  });
};

import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    nationalID: {
      type: String,
      unique: true,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "prefer not to say"],
      required: true,
    },

    records: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Record",
      default: [],
    },
  },
  { timestamps: true },
);

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;

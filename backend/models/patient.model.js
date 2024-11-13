import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
    },

    lastName: {
      type: String,
      required: true,
      unique: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "prefer not to say"],
    },

    records: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Record",
      index: true,
    },
  },
  { timestamps: true },
);

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;

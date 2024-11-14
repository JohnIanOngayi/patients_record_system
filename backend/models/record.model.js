import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    BMI: {
      type: Number,
      required: true,
    },
    generalHealth: {
      type: String,
      enums: ["Poor", "Good"],
      required: true,
    },
    secondaryQuestion: {
      type: String,
      enums: ["Yes", "No"],
      required: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
      index: true,
    },

    comment: {
      type: String,
    },
  },
  { timestamps: true },
);

const Record = mongoose.model("Record", recordSchema);
export default Record;

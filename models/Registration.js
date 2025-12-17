import mongoose from "mongoose";

// pag define han registration schema
const registrationSchema = new mongoose.Schema(
  {
    // unique nga event ID
  event: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Event",
  required: true
},


    // bug-os nga ngaran 
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    // kurso han estudyante (e.g. BSIT)
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },

  },
  {
    // automatic nga createdAt ngan updatedAt
    timestamps: true,
  } 
);

// pag create han Registration model
const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;

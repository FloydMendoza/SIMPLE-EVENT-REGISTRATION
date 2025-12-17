  import mongoose from "mongoose";

  // pag define han event schema
  const eventSchema = new mongoose.Schema(
    {
      // event para hibaroan kun ano an event
      eventid: {
        type: String,
        required: [true, "Event ID is required"],
        trim: true,
      },

      // petsa han event
      date: {
        type: String,
        required: [true, "Date is required"],
        trim: true,
      },

      // location han event
      location: {
        type: String,
        required: [true, "location is required"],
      },
    },
    {
      // automatic timestamps
      timestamps: true,
    }
  );

  // pag create han event model
  const Event = mongoose.model("Event", eventSchema);

  export default Event;

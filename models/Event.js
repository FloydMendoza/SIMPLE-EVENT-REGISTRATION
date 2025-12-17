  import mongoose from "mongoose";

  // pag define han event schema
  const eventSchema = new mongoose.Schema(
    {
      // event id
      eventid: {
        type: String,
        required: [true, "Event ID is required"],
        trim: true,
      },

      //ngaran han client

      fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

      //duration han event

       duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },

    //ngaran han event

      eventname: {
      type: String,
      ref: "Event",
      required: true
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

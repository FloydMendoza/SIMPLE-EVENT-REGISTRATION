import Event from '../models/Event.js';

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const { eventid, date, location, eventname, fullName, duration} = req.body;

    // validate required fields
    if (!eventid || !date || !location || !eventname || !duration || !fullName) {
      return res.status(400).json({
        message: "eventid, date, eventname, duration, fullname and location are required"
      });
    }

    // check if eventid already exists
    const existingEvent = await Event.findOne({ eventid });

    if (existingEvent) {
      return res.status(409).json({
        message: "Event with this eventid already exists"
      });
    }

    // create new event
    const event = await Event.create({
      eventid,
      date,
      location,
      duration,
      fullName,
      eventname

    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event
    });

  } catch (error) {
    console.error("Create Event Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating event",
      error: error.message
    });
  }
};

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single event
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete event
export const deleteEvent = async (req, res) => {
  try {
    const { eventid } = req.params;

    // validate eventid
    if (!eventid) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const deletedEvent = await Event.findOneAndDelete({ eventid });

    // if event not found
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: deletedEvent
    });

  } catch (error) {
    console.error("Delete Event Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting event",
      error: error.message
    });
  }
};

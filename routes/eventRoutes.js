import express from 'express';
import { createEvent, getAllEvents, getEventById, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

router.post('/create', createEvent);
router.get('/allevents', getAllEvents);
router.get('/:id', getEventById);
router.delete('/:eventid', deleteEvent);

export default router;

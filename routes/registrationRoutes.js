import express from 'express';
import { createRegistration, getAllRegistrations } from '../controllers/registrationController.js';

const router = express.Router();

router.post('/create', createRegistration);
router.get('/all', getAllRegistrations);

export default router;

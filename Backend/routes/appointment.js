import express from "express";
import { createAppointment, getAllTheAppointments } from "../controllers/appointment.js";

const router = express.Router();

router.post('/',createAppointment);
router.get('/search/:key',getAllTheAppointments);

export default router;
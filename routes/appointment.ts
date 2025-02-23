import { Router } from "express";
import {
    getAppointments,
    getAppointment,
    getAppointmentsByUser,
    getAppointmentByProfessional,
    getAppointmentByDate,
    postAppointment,
    putAppointment,
    deleteAppointment
} from "../controllers/appointment";


const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointment);
router.get("/user/:id", getAppointmentsByUser);
router.get("/professional/:id", getAppointmentByProfessional);
router.get("/date/:date", getAppointmentByDate);
router.post("/", postAppointment);
router.put("/:id", putAppointment);
router.delete("/:id", deleteAppointment);

export default router;
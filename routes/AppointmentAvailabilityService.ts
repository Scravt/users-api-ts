import {Router} from 'express';
import {getAppointmentAvailability,
     updateAppointmentAvailability, 
     createAppointmentAvailability} 
     from '../controllers/AppointmentAvailabilityService';

const router = Router();

router.get("/", getAppointmentAvailability);
router.put("/", updateAppointmentAvailability);
router.post("/", createAppointmentAvailability);

export default router;
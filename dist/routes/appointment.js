"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_1 = require("../controllers/appointment");
const router = (0, express_1.Router)();
router.get("/", appointment_1.getAppointments);
router.get("/:id", appointment_1.getAppointment);
router.get("/user/:id", appointment_1.getAppointmentsByUser);
router.get("/professional/:id", appointment_1.getAppointmentByProfessional);
router.get("/date/:date", appointment_1.getAppointmentByDate);
router.post("/", appointment_1.postAppointment);
router.put("/:id", appointment_1.putAppointment);
router.delete("/:id", appointment_1.deleteAppointment);
exports.default = router;
//# sourceMappingURL=appointment.js.map
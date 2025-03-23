"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppointmentAvailabilityService_1 = require("../controllers/AppointmentAvailabilityService");
const router = (0, express_1.Router)();
router.get("/", AppointmentAvailabilityService_1.getAppointmentAvailability);
router.put("/", AppointmentAvailabilityService_1.updateAppointmentAvailability);
router.post("/", AppointmentAvailabilityService_1.createAppointmentAvailability);
exports.default = router;
//# sourceMappingURL=AppointmentAvailabilityService.js.map
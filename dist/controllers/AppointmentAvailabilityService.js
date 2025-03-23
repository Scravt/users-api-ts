"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointmentAvailability = exports.updateAppointmentAvailability = exports.getAppointmentAvailability = void 0;
const AppointmentAvailabilityService_1 = __importDefault(require("../models/AppointmentAvailabilityService"));
const getAppointmentAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = yield AppointmentAvailabilityService_1.default.findByPk(1);
        if (!config) {
            res.status(404).json({ msg: "Configuración de disponibilidad no encontrada" });
            return;
        }
        res.json(config);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener la configuración", error });
    }
});
exports.getAppointmentAvailability = getAppointmentAvailability;
const updateAppointmentAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = yield AppointmentAvailabilityService_1.default.findByPk(1);
        if (!config) {
            res.status(404).json({ msg: "Configuración de disponibilidad no encontrada" });
            return;
        }
        yield config.update(req.body);
        res.json(config);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar la configuración", error });
    }
});
exports.updateAppointmentAvailability = updateAppointmentAvailability;
const createAppointmentAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = yield AppointmentAvailabilityService_1.default.create(req.body);
        res.json(config);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al crear la configuración", error });
    }
});
exports.createAppointmentAvailability = createAppointmentAvailability;
//# sourceMappingURL=AppointmentAvailabilityService.js.map
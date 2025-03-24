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
exports.deleteAppointment = exports.putAppointment = exports.postAppointment = exports.getAppointmentByDate = exports.getAppointmentByProfessional = exports.getAppointmentsByUser = exports.getAppointment = exports.getAppointments = void 0;
const sequelize_1 = require("sequelize");
const appointment_1 = __importDefault(require("../models/appointment"));
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointment_1.default.findAll();
        res.json({ appointments });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener citas", error });
    }
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield appointment_1.default.findByPk(id);
        if (!appointment) {
            res.status(404).json({ msg: "Cita no encontrada" });
            return;
        }
        res.json(appointment);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener la cita", error });
    }
});
exports.getAppointment = getAppointment;
const getAppointmentsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointments = yield appointment_1.default.findAll({ where: { user_id: id } });
        if (!appointments) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }
        res.json(appointments);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
});
exports.getAppointmentsByUser = getAppointmentsByUser;
const getAppointmentByProfessional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointments = yield appointment_1.default.findAll({ where: { professional_id: id } });
        if (!appointments) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }
        res.json(appointments);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
});
exports.getAppointmentByProfessional = getAppointmentByProfessional;
const getAppointmentByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.params; // Se espera un formato "YYYY-MM-DD"
        const startDate = new Date(`${date}T00:00:00.000Z`); // Inicio del día
        const endDate = new Date(`${date}T23:59:59.999Z`); // Fin del día
        const appointments = yield appointment_1.default.findAll({
            where: {
                date: {
                    [sequelize_1.Op.between]: [startDate, endDate] // Busca citas dentro del rango
                }
            }
        });
        if (appointments.length === 0) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }
        res.json(appointments);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
});
exports.getAppointmentByDate = getAppointmentByDate;
const postAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, professional_id, processType, date } = req.body;
        const appointment = yield appointment_1.default.create({ user_id, professional_id, processType, date });
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al crear cita", error });
    }
});
exports.postAppointment = postAppointment;
const putAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtén el id de la cita a actualizar.
        // Busca la cita por su ID
        const appointment = yield appointment_1.default.findByPk(id);
        if (!appointment) {
            res.status(404).json({ msg: "Cita no encontrada" });
            return;
        }
        // Asegúrate de que los campos del cuerpo coincidan con los del modelo
        const { user_id, professional_id, processType, date } = req.body;
        // Realiza la actualización
        yield appointment.update({ user_id, professional_id, processType, date });
        // Devuelve la cita actualizada
        res.json(appointment);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar la cita", error });
    }
});
exports.putAppointment = putAppointment;
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield appointment_1.default.findByPk(id);
        if (!appointment) {
            res.status(404).json({ msg: "Cita no encontrada" });
            return;
        }
        yield appointment.destroy();
        res.json({ msg: "Cita eliminada" });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al eliminar la cita", error });
    }
});
exports.deleteAppointment = deleteAppointment;
//# sourceMappingURL=appointment.js.map
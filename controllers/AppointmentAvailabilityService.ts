import { Request, Response } from "express";
import AppointmentAvailabilityService from "../models/AppointmentAvailabilityService";

const getAppointmentAvailability = async (req: Request, res: Response): Promise<void> => {
    try {
        const config = await AppointmentAvailabilityService.findByPk(1);

        if (!config) {
            res.status(404).json({ msg: "Configuración de disponibilidad no encontrada" });
            return;
        }

        res.json(config);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la configuración", error });
    }
};

const updateAppointmentAvailability = async (req: Request, res: Response): Promise<void> => {
    try {
        const config = await AppointmentAvailabilityService.findByPk(1);

        if (!config) {
            res.status(404).json({ msg: "Configuración de disponibilidad no encontrada" });
            return;
        }

        await config.update(req.body);
        res.json(config);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la configuración", error });
    }
};
const createAppointmentAvailability = async (req: Request, res: Response): Promise<void> => {
    try {
        const { datesAvailability, minWaitingDays } = req.body;

        // Validar que datesAvailability sea un array de números
        if (!Array.isArray(datesAvailability) || datesAvailability.some(day => typeof day !== "number")) {
            res.status(400).json({ msg: "datesAvailability debe ser un array de números" });
            return;
        }

        if (typeof minWaitingDays !== "number") {
            res.status(400).json({ msg: "minWaitingDays debe ser un número" });
            return;
        }

        // Crear el nuevo registro
        const appointmentAvailabilityService = await AppointmentAvailabilityService.create({
            datesAvailability, // Sequelize lo convierte automáticamente en JSON
            minWaitingDays,
        });

        res.status(201).json(appointmentAvailabilityService);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear el servicio de disponibilidad de citas", error });
    }
};

export { getAppointmentAvailability, updateAppointmentAvailability, createAppointmentAvailability };
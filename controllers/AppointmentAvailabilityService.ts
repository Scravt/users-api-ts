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
        const config = await AppointmentAvailabilityService.create(req.body);
        res.json(config);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear la configuración", error });
    }
}

export { getAppointmentAvailability, updateAppointmentAvailability, createAppointmentAvailability };
import { Request, Response } from "express";
import Appoimtment from "../models/appointment";


const getAppointments = async (req: Request, res: Response): Promise<void> => {
    try {
        const appointments = await Appoimtment.findAll();
        res.json({ appointments });
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener citas", error });
    }
};

const getAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const appointment = await Appoimtment.findByPk(id);

        if (!appointment) {
            res.status(404).json({ msg: "Cita no encontrada" });
            return;
        }

        res.json(appointment);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la cita", error });
    }
};

const getAppointmentsByUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const appointments = await Appoimtment.findAll({ where: { id_usuario: id } });

        if (!appointments) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
}

const getAppointmentByProfessional = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const appointments = await Appoimtment.findAll({ where: { id_profesional: id } });

        if (!appointments) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
}

const getAppointmentByDate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { fecha } = req.params;
        const appointments = await Appoimtment.findAll({ where: { fecha } });

        if (!appointments) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
}

const postAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id_usuario, id_profesional, date} = req.body;
        const appointment = await Appoimtment.create({ id_usuario, id_profesional, date });

        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear cita", error });
    }
};

const putAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const appointment = await Appoimtment.findByPk(id);

        if (!appointment) {
            res.status(404).json({ msg: "Cita no encontrada" });
            return;
        }

        const { id_usuario, id_profesional, date } = req.body;
        await appointment.update({ id_usuario, id_profesional, date });

        res.json(appointment);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la cita", error });
    }
}

const deleteAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const appointment = await Appoimtment.findByPk(id);

        if (!appointment) {
            res.status(404).json({ msg: "Cita no encontrada" });
            return;
        }

        await appointment.destroy();
        res.json({ msg: "Cita eliminada" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la cita", error });
    }
}

export { getAppointments, getAppointment, getAppointmentsByUser, getAppointmentByProfessional, getAppointmentByDate, postAppointment, putAppointment, deleteAppointment };
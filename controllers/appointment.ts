import { Request, Response } from "express";
import { Op } from "sequelize";
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
        const appointments = await Appoimtment.findAll({ where: { user_id: id } });

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
        const appointments = await Appoimtment.findAll({ where: { professional_id: id } });

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
        const { date } = req.params; // Se espera un formato "YYYY-MM-DD"
        
        const startDate = new Date(`${date}T00:00:00.000Z`); // Inicio del día
        const endDate = new Date(`${date}T23:59:59.999Z`); // Fin del día

        const appointments = await Appoimtment.findAll({
            where: {
                date: {
                    [Op.between]: [startDate, endDate] // Busca citas dentro del rango
                }
            }
        });

        if (appointments.length === 0) {
            res.status(404).json({ msg: "Citas no encontradas" });
            return;
        }

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener las citas", error });
    }
};

const postAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id,professional_id, date} = req.body;
        const appointment = await Appoimtment.create({ user_id, professional_id, date });

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

        const { id_usuario, id_professional, date } = req.body;
        await appointment.update({ id_usuario, id_professional, date });

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
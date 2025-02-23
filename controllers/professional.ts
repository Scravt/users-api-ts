import { Request, Response } from "express";
import Professional from "../models/professional";

const getProfessionals = async (req: Request, res: Response): Promise<void> => {
    try {
        const professionals = await Professional.findAll();
        res.json({ professionals });
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener profesionales", error });
    }
};

const getProfessional = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const professional = await Professional.findByPk(id);

        if (!professional) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }

        res.json(professional);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el profesional", error });
    }
};

const getProfessionalByArea = async (req: Request, res: Response): Promise<void> => {
    try {
        const { area } = req.params;
        const professionals = await Professional.findAll({ where: { area } });

        if (!professionals) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }

        res.json(professionals);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el profesional", error });
    }
}

const postProfessional = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nombre, email, area } = req.body;
        const professional = await Professional.create({ nombre, email, area });

        res.status(201).json(professional);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear profesional", error });
    }
};

const putProfessional = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const professional = await Professional.findByPk(id);

        if (!professional) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }

        await professional.update(req.body);
        res.json(professional);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar profesional", error });
    }
};

const deleteProfessional = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const professional = await Professional.findByPk(id);

        if (!professional) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }

        await professional.destroy();
        res.json({ msg: "Profesional eliminado" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar profesional", error });
    }
};

export { getProfessionals, getProfessional, getProfessionalByArea, postProfessional, putProfessional, deleteProfessional };
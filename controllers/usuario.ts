import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response): Promise<void> => {
    try {
        const usuarios = await Usuario.findAll();
        res.json({ usuarios });
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener usuarios", error });
    }
};

export const getUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el usuario", error });
    }
};

export const postUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email,lastName, dni, estado } = req.body;
        const usuario = await Usuario.create({ name, email,lastName, dni, estado});

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear usuario", error });
    }
};

export const putUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }

        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar usuario", error });
    }
};

export const deleteUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }

        await usuario.destroy();
        res.json({ msg: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar usuario", error });
    }
};

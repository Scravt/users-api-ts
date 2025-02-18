import { DataTypes } from "sequelize";
import db from "../db/conecction";

const Usuario = db.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "El nombre no puede estar vacío" },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: { msg: "Debe ser un correo válido" },
            },
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        tableName: "usuarios",
        timestamps: false,
    }
);

export default Usuario;

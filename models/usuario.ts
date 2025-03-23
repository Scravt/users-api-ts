import { DataTypes, Model } from "sequelize";
import db from "../db/conecction";

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El nombre no puede estar vacío" },
        },
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El apellido no puede estar vacío" },
        },
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El dni no puede estar vacío" },
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
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{
    sequelize: db,
    modelName: "Usuario",
    tableName: "usuarios",
    timestamps: false,
});

export default Usuario;

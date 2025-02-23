import { DataTypes, Model } from "sequelize";
import db from "../db/conecction";

class Professional extends Model {}

Professional.init({
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "Debe ser un correo válido" },
        },
    },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El área no puede estar vacía" },
        },  
    },
      box: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El box no puede estar vacío" },
        },
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{
    sequelize: db,
    modelName: "Professional",
    tableName: "professionals",
    timestamps: false,
});	

export default Professional;
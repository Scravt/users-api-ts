import { DataTypes, Model } from "sequelize";
import db from "../db/conecction";
import Professional from "./professional";
import Usuario from "./usuario";

class Appoimtment extends Model {}

Appoimtment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    processType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El tipo de proceso no puede estar vacío" },
        },
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: { msg: "La fecha no puede estar vacía" },
        },
    }}
    ,{
    sequelize: db,
    modelName: "Appoimtment",
    tableName: "appoimtments",
    }

)

export default Appoimtment;
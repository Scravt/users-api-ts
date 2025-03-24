"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../db/conecction"));
class Appoimtment extends sequelize_1.Model {
}
Appoimtment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    processType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "El tipo de proceso no puede estar vacío" },
        },
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: { msg: "La fecha no puede estar vacía" },
        },
    }
}, {
    sequelize: conecction_1.default,
    modelName: "Appoimtment",
    tableName: "appoimtments",
});
exports.default = Appoimtment;
//# sourceMappingURL=appointment.js.map
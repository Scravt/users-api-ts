"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../db/conecction"));
class AppointmentAvailabilityService extends sequelize_1.Model {
}
AppointmentAvailabilityService.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1, // Siempre será 1
    },
    datesAvailability: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: JSON.stringify([2, 4]), // Días permitidos (ejemplo: martes y jueves)
        validate: {
            notEmpty: { msg: "La disponibilidad de días no puede estar vacía" },
        },
    },
    minWaitingDays: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 7, // Días mínimos de espera
        validate: {
            notEmpty: { msg: "Los días mínimos de espera no pueden estar vacíos" },
        },
    },
}, {
    sequelize: conecction_1.default,
    modelName: "AppointmentAvailabilityService",
    tableName: "appointment_availabilities_services",
});
exports.default = AppointmentAvailabilityService;
//# sourceMappingURL=AppointmentAvailabilityService.js.map
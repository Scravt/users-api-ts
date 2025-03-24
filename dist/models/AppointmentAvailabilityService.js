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
        autoIncrement: true,
    },
    datesAvailability: {
        type: sequelize_1.DataTypes.STRING, // Se almacena como STRING con JSON
        allowNull: false,
        defaultValue: JSON.stringify([2, 4]), // Se guarda como JSON en string
        validate: {
            notEmpty: { msg: "datesAvailability no puede estar vacío" },
        },
        get() {
            const value = this.getDataValue("datesAvailability");
            return value ? JSON.parse(value) : []; // Convertir STRING a ARRAY
        },
        set(value) {
            this.setDataValue("datesAvailability", JSON.stringify(value)); // Convertir ARRAY a STRING
        },
    },
    minWaitingDays: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 7,
    },
}, {
    sequelize: conecction_1.default,
    modelName: "AppointmentAvailabilityService",
    tableName: "appointment_availabilities_services",
});
exports.default = AppointmentAvailabilityService;
//# sourceMappingURL=AppointmentAvailabilityService.js.map
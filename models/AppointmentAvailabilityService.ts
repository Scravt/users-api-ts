import { DataTypes, Model } from "sequelize";
import db from "../db/conecction";

class AppointmentAvailabilityService extends Model {}

AppointmentAvailabilityService.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: 1, // Siempre será 1
    },
    datesAvailability: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: JSON.stringify([2, 4]), // Días permitidos (ejemplo: martes y jueves)
      validate: {
        notEmpty: { msg: "La disponibilidad de días no puede estar vacía" },
      },
    },
    minWaitingDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 7, // Días mínimos de espera
      validate: {
        notEmpty: { msg: "Los días mínimos de espera no pueden estar vacíos" },
      },
    },
  },
  {
    sequelize: db,
    modelName: "AppointmentAvailabilityService",
    tableName: "appointment_availabilities_services",
  }
);

export default AppointmentAvailabilityService;

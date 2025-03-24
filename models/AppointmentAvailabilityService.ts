import { DataTypes, Model } from "sequelize";
import db from "../db/conecction";

class AppointmentAvailabilityService extends Model {}

AppointmentAvailabilityService.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    datesAvailability: {
      type: DataTypes.STRING, // Se almacena como STRING con JSON
      allowNull: false,
      defaultValue: JSON.stringify([2, 4]), // Se guarda como JSON en string
      validate: {
        notEmpty: { msg: "datesAvailability no puede estar vacío" },
      },
      get() {
        const value = this.getDataValue("datesAvailability");
        return value ? JSON.parse(value) : []; // Convertir STRING a ARRAY
      },
      set(value: number[]) {
        this.setDataValue("datesAvailability", JSON.stringify(value)); // Convertir ARRAY a STRING
      },
    },
    minWaitingDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 7,
    },
  },
  {
    sequelize: db,
    modelName: "AppointmentAvailabilityService",
    tableName: "appointment_availabilities_services",
  }
);

export default AppointmentAvailabilityService;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appoimtment = exports.Professional = exports.Usuario = void 0;
const usuario_1 = __importDefault(require("./usuario"));
exports.Usuario = usuario_1.default;
const professional_1 = __importDefault(require("./professional"));
exports.Professional = professional_1.default;
const appointment_1 = __importDefault(require("./appointment"));
exports.Appoimtment = appointment_1.default;
//turnos
appointment_1.default.belongsTo(professional_1.default, { foreignKey: 'professional_id' });
appointment_1.default.belongsTo(usuario_1.default, { foreignKey: 'user_id' });
//profesionales
professional_1.default.hasMany(appointment_1.default, { foreignKey: 'professional_id' });
//usuarios
usuario_1.default.hasMany(appointment_1.default, { foreignKey: 'user_id' });
//# sourceMappingURL=index.js.map
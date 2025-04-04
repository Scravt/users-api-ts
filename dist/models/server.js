"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const professional_1 = __importDefault(require("../routes/professional"));
const appointment_1 = __importDefault(require("../routes/appointment"));
const AppointmentAvailabilityService_1 = __importDefault(require("../routes/AppointmentAvailabilityService"));
const conecction_1 = __importDefault(require("../db/conecction"));
require("../models");
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
            professionals: "/api/professionals",
            appointments: "/api/appointments",
            appointmentsConfig: "/api/appointments-config",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8000;
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conecction_1.default.authenticate();
                console.log("Database online");
                // Sincroniza las tablas sin perder datos
                yield conecction_1.default.sync({ alter: true });
                console.log("Tablas sincronizadas correctamente");
            }
            catch (error) {
                console.error("Error al conectar la base de datos:", error);
            }
        });
    }
    middlewares() {
        // CORS vbuscar bienq ue es cors
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.professionals, professional_1.default);
        this.app.use(this.apiPaths.appointments, appointment_1.default);
        this.app.use(this.apiPaths.appointmentsConfig, AppointmentAvailabilityService_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map
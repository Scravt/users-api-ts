"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTables = void 0;
const db_1 = __importDefault(require("./db")); // Importa la conexión desde db.ts
// Crear tablas
const createTables = () => {
    db_1.default.serialize(() => {
        db_1.default.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        estado BOOLEAN NOT NULL DEFAULT TRUE
    )`, (err) => {
            if (err) {
                console.error('Error al crear la tabla', err.message);
            }
            else {
                console.log('Tabla "users" creada o verificada');
            }
        });
    });
};
exports.createTables = createTables;
//# sourceMappingURL=createTables.js.map
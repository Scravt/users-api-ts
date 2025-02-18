"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
// Define el tipo de la base de datos
const db = new sqlite3_1.default.Database('./db/data.db', (err) => {
    if (err) {
        console.error('Error al conectar a la base de datos', err.message);
    }
    else {
        console.log('Conexión establecida con SQLite');
    }
});
exports.default = db;
//# sourceMappingURL=db.js.map
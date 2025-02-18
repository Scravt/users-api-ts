"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
const db_1 = __importDefault(require("./conn_db/db"));
const createTables_1 = require("./conn_db/createTables");
dotenv_1.default.config();
const server = new server_1.default();
db_1.default;
(0, createTables_1.createTables)();
server.listen();
//# sourceMappingURL=app.js.map
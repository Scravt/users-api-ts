"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './DATABASE/database.db'
});
exports.default = db;
//# sourceMappingURL=conecction.js.map
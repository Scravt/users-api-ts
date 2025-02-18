import { Sequelize } from "sequelize";

const db = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './DATABASE/database.db'
});


export default db;
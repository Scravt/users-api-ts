import sqlite3 from 'sqlite3';

// Define el tipo de la base de datos
const db = new sqlite3.Database('./db/data.db', (err: Error | null) => {
    if (err) {
        console.error('Error al conectar a la base de datos', err.message);
    } else {
        console.log('Conexión establecida con SQLite');
    }
});

export default db;

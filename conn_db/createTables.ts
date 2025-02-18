import db from './db';  // Importa la conexión desde db.ts

// Crear tablas
export const createTables = () => {
 db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        estado BOOLEAN NOT NULL DEFAULT TRUE
    )`, (err: Error | null) => {
        if (err) {
            console.error('Error al crear la tabla', err.message);
        } else {
            console.log('Tabla "users" creada o verificada');
        }
    });
});
}


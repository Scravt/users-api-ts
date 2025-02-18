import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/conecction";

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        usuarios: "/api/usuarios",
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online");

            // Sincroniza las tablas sin perder datos
            await db.sync({ alter: true });
            console.log("Tablas sincronizadas correctamente");
        } catch (error) {
            console.error("Error al conectar la base de datos:", error);
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;

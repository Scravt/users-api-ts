import express, {Application} from 'express';
import  userRoutes from '../routes/usuario';
import cors from 'cors';

import db from '../db/conecction';

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        }
        catch (error) {
            throw new Error(String(error));
        }
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.dbConnection();
        this.midelwares();
        this.routes();
    }

    midelwares() {
        //cors
        this.app.use(cors());

        //lectura del body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'));


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
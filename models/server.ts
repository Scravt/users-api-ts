import express, {Application} from 'express';
import  userRoutes from '../routes/usuario';

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.routes();
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
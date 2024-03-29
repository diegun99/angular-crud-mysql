
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/IndexRoutes';
import gamesRoutes from './routes/GamesRoutes';

class Server {
    public app : Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }

    config() : void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));// morgan para ver las peticiones realizadas, en consola.
        this.app.use(cors());// angular pedira datos a nuestro servidor
        this.app.use(express.json());// permite poder aceptar formatos json
        this.app.use(express.urlencoded({extended : false}));// para enviar desde un formulario htmlñ

    }

    routes() : void { // para definir las rutas http 
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        

    }

    start(): void {// inicializar el servidor
        this.app.listen(this.app.get('port'), ()=> {
            console.log('server on port 3000', this.app.get('port'));

        });


    }

}

const server = new Server ();
server.start();
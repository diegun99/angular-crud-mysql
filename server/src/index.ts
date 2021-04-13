
import express, {Application} from 'express'

import indexRoutes from './routes/IndexRoutes';
//import gamesRoutes from './routes/GamesRoutes';

class Server {
    public app : Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }

    config() : void {
        this.app.set('port',process.env.PORT || 3000);

    }

    routes() : void { // para definir las rutas http 
        this.app.use(indexRoutes);

    }

    start(): void {// inicializar el servidor
        this.app.listen(this.app.get('port'), ()=> {
            console.log('server on port 3000', this.app.get('port'));

        });


    }

}

const server = new Server ();
server.start();
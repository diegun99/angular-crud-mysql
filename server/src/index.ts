
import express, {Application} from 'express'

class Server {
    public app : Application;
    constructor(){
        this.app = express();

    }

    config() : void {
        this.app.set('PORT',process.env.PORT || 3000);

    }

    routes() : void { // para definir las rutas http 

    }

    start(): void {// inicializar el servidor
        this.app.listen(this.app.get('PORT'), ()=> {
            console.log('server on port 3000')

        });


    }

}

new Server ();
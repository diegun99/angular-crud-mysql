"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const GamesRoutes_1 = __importDefault(require("./routes/GamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); // morgan para ver las peticiones realizadas, en consola.
        this.app.use(cors_1.default()); // angular pedira datos a nuestro servidor
        this.app.use(express_1.default.json()); // permite poder aceptar formatos json
        this.app.use(express_1.default.urlencoded({ extended: false })); // para enviar desde un formulario htmlñ
    }
    routes() {
        this.app.use('/', IndexRoutes_1.default);
        this.app.use('/api/games', GamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port 3000', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

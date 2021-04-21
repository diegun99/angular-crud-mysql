"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        database_1.default.query('DESCRIBE games');
        res.json({ text: 'Obteniendo lista' });
    }
    getOne(req, res) {
        res.json({ text: 'Obteniendo juego ' + req.params.id });
    }
    create(req, res) {
        res.json({ text: 'Creando un juego' });
    }
    update(req, res) {
        res.json({ text: 'actualizando un juego ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'eliminando un juego ' + req.params.id });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;

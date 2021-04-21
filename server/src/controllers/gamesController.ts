import {Request, Response} from 'express';

import pool from '../database';

class GamesController {

   public  list(req: Request,res: Response){
      pool.query('DESCRIBE games');
      res.json({text : 'Obteniendo lista'});
   }

   public  getOne(req: Request,res: Response){
      res.json({text : 'Obteniendo juego '+ req.params.id});
   }

   public create(req: Request,res : Response){
      res.json({text : 'Creando un juego'});
   }

   public update ( req :Request, res : Response){
      res.json({text : 'actualizando un juego ' + req.params.id});
   }

   public delete(req: Request, res :Response){
      res.json({text : 'eliminando un juego ' + req.params.id});
   }
}

const gamesController = new GamesController();
export default gamesController;
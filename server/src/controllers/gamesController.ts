import {Request, Response} from 'express';

import pool from '../database';

class GamesController {

   public  index(req: Request,res: Response){
      pool.query('DESCRIBE games');
      res.json({text : 'jueguitos'});
   }

   public create(req: Request,res : Response){
      res.json({text : 'Creando un juego'});
   }
}

const gamesController = new GamesController();
export default gamesController;
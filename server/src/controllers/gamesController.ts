import {Request, Response} from 'express';

import pool from '../database';

class GamesController {

   public async list (req: Request, res: Response) {
      await pool.query('SELECT * FROM games', function(err, result, fields) {
          if (err) throw err;
          res.json(result);
      });
  }

   public  getOne(req: Request,res: Response){
      res.json({text : 'Obteniendo juego '+ req.params.id});
   }

   public create(req: Request,res : Response){
      pool.query("INSERT INTO games set ?", [req.body]);
      console.log(req.body);
      res.json({message : 'Juego Guardado'});
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
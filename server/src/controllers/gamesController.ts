import {Request, Response} from 'express';

import pool from '../database';

class GamesController {

   public async list (req: Request, res: Response) {
      await pool.query('SELECT * FROM games', function(err, result, fields) {
          if (err) throw err;
          res.json(result);
      });
  }

  public async getOne(req:Request, res: Response): Promise<any>{
   const {id} = req.params;
 const games = await pool.query('SELECT * FROM games WHERE id=?', [id],(error, result) => {// pendientev por revisar

   if (error) throw error;
// if(result.length===0){ res.json({message:"El juego no existe"})}else{
 //  res.json(result);}//
});}

   public create(req: Request,res : Response){
      pool.query("INSERT INTO games set ?", [req.body]);
      console.log(req.body);
      res.json({message : 'Juego Guardado'});
   }

   public async update ( req :Request, res : Response){//corregir
      const {id} = req.params;
      await pool.query("UPDATE games set ? WHEREid = ?", [req.body,id]);
      res.json({message : "El juego fue actualizado"});
   }

   public async delete(req: Request, res: Response): Promise<void> {//corregir
      const { id } = req.params;
      await pool.query('DELETE FROM games WHERE id = ?', [id]);
      res.json({ message: "The game was deleted" });
  }
}

const gamesController = new GamesController();
export default gamesController;
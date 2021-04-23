import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI : string = "http://localhost/3000/api";

  constructor(private http : HttpClient) { }

  getGames(){
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id :string){
    return this.http.get(`${this.API_URI}/games/${id}`);
    
  }

  deleteGame(){
    
  }

  saveGame(game: Game){
    return this.http.post(`${this.API_URI}/games`,game);

  }

}

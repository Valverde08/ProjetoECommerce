import {JogoRepository} from '../Repository/JogoRepository'
import { Jogo } from "../model/Jogo";

export class JogoController implements JogoRepository {
  private games: Jogo[] = [];

  add(game: Jogo): void {
    this.games.push(game);
  }

  update(id: number, updatedGame: Jogo): void {
    this.games[id] = updatedGame;
  }

  list(): Jogo[] {
    return this.games;
  }

  delete(id: number): void {
    this.games.splice(id, 1);
  }
}

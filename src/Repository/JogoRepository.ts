import { Jogo } from "../model/Jogo";

export interface IGameController {
  adicionar(game: Jogo): void;
  atualizar(id: number, updatedGame: Jogo): void;
  listar(): Jogo[];
  deletar(id: number): void;
}
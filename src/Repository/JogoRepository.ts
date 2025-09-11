import { Jogo } from "../model/Jogo";

export interface JogoRepository {
  adicionar(game: Jogo): void;
  atualizar(id: number, updatedGame: Jogo): void;
  listar(): Jogo[];
  deletar(id: number): void;
}
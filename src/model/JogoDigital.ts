import { Jogo } from "./Jogo";

export class JogoDigital extends Jogo{
    private _tamanho: number;

    constructor(nome: string,valor: string,tipo: number, genero: string, tamanho: number){
        super(nome,valor,tipo,genero)
        this._tamanho = tamanho
    }
    


}
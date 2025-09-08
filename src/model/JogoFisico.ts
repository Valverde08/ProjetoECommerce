import { Jogo } from "./Jogo";

export class JogoFisico extends Jogo{
    private _disco: string;

    constructor(nome: string,valor: string,tipo: number, genero: string, disco: string){
        super(nome,valor,tipo,genero)
        this._disco = disco
    }
    


}
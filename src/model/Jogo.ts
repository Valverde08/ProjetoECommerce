export abstract class Jogo{
    private _nome: string;
    private _valor:string;
    private _tipo:number;
    private _genero:string;

    constructor(nome: string,valor: string,tipo: number, genero: string){

    this._nome = nome;
    this._valor = valor;
    this._tipo = tipo;
    this._genero = genero;
    

    }

    public get nome():string{
        return this.nome;
    }

    public set nome(nome:string){
        this._nome = nome
    }

    public get valor():number{
        return this.valor;
    }

    public set valor(valor:number){
        this.valor = valor
    }

    public get tipo():number{
        return this.tipo;
    }

    public set tipo(tipo:number){
        this._tipo = tipo
    }

    public get genero():string{
        return this.genero;
    }

    public set genero(genero:string){
        this._genero = genero
    }



}

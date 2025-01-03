class Pessoa{
    nome: string;
    renda?: number;


    //Arg opcional deve vir depois do argumento obrigatorio
    constructor(nome: string, renda?: number){
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string{
        return `${this.nome} disse oi`;
    }





}
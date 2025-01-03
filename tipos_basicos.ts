let estaChovendo: boolean = false
let idade: number = 27
let altura: number = 1.75
const nacionalidade: string = 'Brasileira'

// Nao podemos criar um array com varios tipos - Formas diferentes de declarar arrays 
const colegas:  string[] = ['lucas', 'fernanda']
const tecnologias: Array<string> = ['oie']

//readonly array (nao possui metodo push)
const notas: ReadonlyArray<number> = [7,8,9]



const lista: [nome: string, estaEstudando:boolean, idade:number] = ['gian', true, 27]


let idadeAna: number | string = 25
idadeAna = '25'

let dadosAPI: any;
dadosAPI = 10
dadosAPI = true
dadosAPI = [1,2,3]




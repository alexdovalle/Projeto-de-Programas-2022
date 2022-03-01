export class Aventureiro{
    Nome: string;
    Vida: number;
    Nivel: number;
    Forca: number;
    Defesa: number;
    Stamina: number;
    Inteligencia: number;
    Agilidade: number;

    constructor(nome: string, forca: number, defesa: number, stamina: number, inteligencia: number, agilidade: number ) {
        this.Nome = nome;
        this.Vida = 10;
        this.Nivel = 0;
        this.Forca = forca;
        this.Defesa = defesa;
        this.Stamina = stamina;
        this.Inteligencia = inteligencia;
        this.Agilidade = agilidade;

    }
    aumentarNivel(){
        console.log(this.Nome, 'subiu de nível!')
        this.Nivel++;
        this.Vida++;
        this.Forca++;
        this.Defesa++;
        this.Stamina++;
        this.Inteligencia++;
        this.Agilidade++;


    }
    atacar(){
        console.log(this.Nome, 'Está atacando!');
        this.Stamina--;
    }    
    ferimento(){
        console.log(this.Nome, 'foi ferido!');
        this.Vida--;
    }




}
let Personagem: Aventureiro = new Aventureiro('Grave', 8, 7, 8, 7, 8);
console.log(Personagem);
Personagem.aumentarNivel();
console.log(Personagem);
Personagem.atacar();
console.log(Personagem);
Personagem.ferimento();
console.log(Personagem);
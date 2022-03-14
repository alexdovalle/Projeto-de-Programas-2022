import { Aventureiro } from "./Aventureiro";

export class Atirador extends Aventureiro{
    Arma: string;
    Municao: number;
    Bonus_para_stamina: number;
    Bonus_para_agilidade: number;
    Bonus_para_atirar: number;

    constructor(nome: string,  forca: number, defesa: number, stamina: number, inteligencia: number, agilidade: number,arma: string) {
        super(nome, forca, defesa, stamina, inteligencia, agilidade);
        this.Nivel++;
        this.Vida += 5;
        this.Arma = arma;
        this.Municao = 15;
        this.Bonus_para_stamina = 2;
        this.Bonus_para_agilidade = 5;
        this.Bonus_para_atirar = 3;

    }
    atirar(){
        console.log(this.Nome, 'está atirando!Bang!');
        this.Municao--;
    }
}


let atirador: Atirador = new Atirador('Grave', 9, 8, 8, 8, 9,'Pistola',);
console.log(atirador);
atirador.atirar();
console.log(atirador);

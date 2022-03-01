import { Aventureiro } from "./Aventureiro";

export class Cavaleiro extends Aventureiro{
    Bonus_para_forca: number;
    Bonus_para_defesa: number;
    Bonus_para_stamina: number;
    Honra: number;
    
    constructor(nome: string, forca: number, defesa: number, stamina: number, inteligencia: number, agilidade: number ) {
        super(nome, forca, defesa, stamina, inteligencia, agilidade);
        this.Nivel++;
        this.Vida += 15;
        this.Bonus_para_forca = 3;
        this.Bonus_para_defesa = 5;
        this.Bonus_para_stamina = 3;
        this.Honra = 3;

    }
    defender(){
        console.log(this.Nome, 'levanta seu escudo!');
        this.Stamina--;
    }
    auradeprotecao(){
        console.log(this.Nome, 'protege seus aliados com sua aura sagrada!');
        this.Honra--;
    }
}

import { Aventureiro } from "./Aventureiro";

export class Mago_Branco extends Aventureiro{
    Bonus_para_inteligencia = 5;
    Mana: number;

    
    constructor(nome: string, forca: number, defesa: number, stamina: number, inteligencia: number, agilidade: number ) {
        super(nome, forca, defesa, stamina, inteligencia, agilidade);
        this.Nivel++;
        this.Vida += 5;
        this.Inteligencia += this.Bonus_para_inteligencia;
        this.Mana = 15;
    }
    barreira(){
        console.log(this.Nome, 'conjura uma barreira protetora!');
        this.Mana -= 5;
        this.Defesa += 5;
    }
    cura(){
        console.log(this.Nome, 'conjura um encantamento revitalizante!');
        this.Mana -= 5;
        this.Vida += 5;
    }
}
let magobranco: Mago_Branco = new Mago_Branco('Grave', 7, 8, 7, 10, 7);
console.log(magobranco);
magobranco.barreira();
console.log(magobranco);
magobranco.cura();
console.log(magobranco);

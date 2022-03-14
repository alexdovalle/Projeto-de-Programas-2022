import { Aventureiro } from "./Aventureiro";

export class Mago_Negro extends Aventureiro{
    Bonus_para_inteligencia = 10;
    Mana: number;

    
    constructor(nome: string, forca: number, defesa: number, stamina: number, inteligencia: number, agilidade: number ) {
        super(nome, forca, defesa, stamina, inteligencia, agilidade);
        this.Nivel++;
        this.Vida += 5;
        this.Inteligencia += this.Bonus_para_inteligencia;
        this.Mana = 15;
    }
    boladefogo(){
        console.log(this.Nome, 'conjura uma bola de fogo destruidora!');
        this.Mana -= 5;
    }
    gasvenenoso(){
        console.log(this.Nome, 'expele uma nuvem de gás tóxico!');
        this.Mana -= 3;
    }

}
let magonegro: Mago_Negro = new Mago_Negro('Grave', 7, 8, 7, 10, 7);
console.log(magonegro);
magonegro.boladefogo();
console.log(magonegro);
magonegro.gasvenenoso();
console.log(magonegro);

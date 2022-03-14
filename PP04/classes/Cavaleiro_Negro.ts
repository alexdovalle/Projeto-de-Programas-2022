import { Aventureiro } from "./Aventureiro";

export class Cavaleiro_Negro extends Aventureiro{
    Bonus_para_forca: number;
    Bonus_para_defesa: number;
    Bonus_para_stamina: number;
    Furia: number;
    
    constructor(nome: string, forca: number, defesa: number, stamina: number, inteligencia: number, agilidade: number ) {
        super(nome, forca, defesa, stamina, inteligencia, agilidade);
        this.Nivel++;
        this.Vida += 20;
        this.Bonus_para_forca = 5;
        this.Bonus_para_defesa = 3;
        this.Bonus_para_stamina = 3;
        this.Furia = 3;
    }
    golpefatal(){
        console.log(this.Nome, 'está rodeado por trevas!');
        console.log(this.Nome, 'usa sua Arte Sombria: Golpe Fatal!');
        this.Vida -= 5;
        this.Furia--;
    }
    laminasangrenta(){
        console.log(this.Nome, 'é consumido por sua Fúria!');
        console.log(this.Nome, 'usa sua Arte Sombria: Lâmina Sangrenta!');
        console.log(this.Nome, 'drenou a força vital de seu inimigo!');
        this.Vida += 5;
        this.Furia--;
    }
    auraDeTrevas(){
        console.log(this.Nome, 'se torna um com as Trevas!');
        console.log(this.Nome, 'usa sua Arte Sombria: Aura de Trevas!');
        console.log('Os inimigos foram aterrorizados!');
        this.Furia--;
    }



}
let cavaleironegro: Cavaleiro_Negro = new Cavaleiro_Negro('Grave', 10, 8, 9, 8, 8);
console.log(cavaleironegro);
cavaleironegro.golpefatal();
console.log(cavaleironegro);
cavaleironegro.laminasangrenta();
console.log(cavaleironegro);
cavaleironegro.auraDeTrevas();


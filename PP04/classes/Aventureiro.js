"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aventureiro = void 0;
var Aventureiro = /** @class */ (function () {
    function Aventureiro(nome, forca, defesa, stamina, inteligencia, agilidade) {
        this.Nome = nome;
        this.Vida = 10;
        this.Nivel = 0;
        this.Forca = forca;
        this.Defesa = defesa;
        this.Stamina = stamina;
        this.Inteligencia = inteligencia;
        this.Agilidade = agilidade;
    }
    Aventureiro.prototype.aumentarNivel = function () {
        console.log(this.Nome, 'subiu de nível!');
        this.Nivel++;
        this.Vida++;
        this.Forca++;
        this.Defesa++;
        this.Stamina++;
        this.Inteligencia++;
        this.Agilidade++;
    };
    Aventureiro.prototype.atacar = function () {
        console.log(this.Nome, 'Está atacando!');
        this.Stamina--;
    };
    Aventureiro.prototype.ferimento = function () {
        console.log(this.Nome, 'foi ferido!');
        this.Vida--;
    };
    return Aventureiro;
}());
exports.Aventureiro = Aventureiro;
var Personagem = new Aventureiro('Grave', 8, 7, 8, 7, 8);
console.log(Personagem);
Personagem.aumentarNivel();
console.log(Personagem);
Personagem.atacar();
console.log(Personagem);
Personagem.ferimento();
console.log(Personagem);

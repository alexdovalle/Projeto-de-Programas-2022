"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro_Negro = void 0;
var Aventureiro_1 = require("./Aventureiro");
var Cavaleiro_Negro = /** @class */ (function (_super) {
    __extends(Cavaleiro_Negro, _super);
    function Cavaleiro_Negro(nome, forca, defesa, stamina, inteligencia, agilidade) {
        var _this = _super.call(this, nome, forca, defesa, stamina, inteligencia, agilidade) || this;
        _this.Nivel++;
        _this.Vida += 20;
        _this.Bonus_para_forca = 5;
        _this.Bonus_para_defesa = 3;
        _this.Bonus_para_stamina = 3;
        _this.Furia = 3;
        return _this;
    }
    Cavaleiro_Negro.prototype.golpefatal = function () {
        console.log(this.Nome, 'está rodeado por trevas!');
        console.log(this.Nome, 'usa sua Arte Sombria: Golpe Fatal!');
        this.Vida -= 5;
        this.Furia--;
    };
    Cavaleiro_Negro.prototype.laminasangrenta = function () {
        console.log(this.Nome, 'é consumido por sua Fúria!');
        console.log(this.Nome, 'usa sua Arte Sombria: Lâmina Sangrenta!');
        console.log(this.Nome, 'drenou a força vital de seu inimigo!');
        this.Vida += 5;
        this.Furia--;
    };
    Cavaleiro_Negro.prototype.auraDeTrevas = function () {
        console.log(this.Nome, 'se torna um com as Trevas!');
        console.log(this.Nome, 'usa sua Arte Sombria: Aura de Trevas!');
        console.log('Os inimigos foram aterrorizados!');
        this.Furia--;
    };
    return Cavaleiro_Negro;
}(Aventureiro_1.Aventureiro));
exports.Cavaleiro_Negro = Cavaleiro_Negro;
var cavaleironegro = new Cavaleiro_Negro('Grave', 10, 8, 9, 8, 8);
console.log(cavaleironegro);
cavaleironegro.golpefatal();
console.log(cavaleironegro);
cavaleironegro.laminasangrenta();
console.log(cavaleironegro);
cavaleironegro.auraDeTrevas();

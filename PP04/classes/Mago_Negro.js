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
exports.Mago_Negro = void 0;
var Aventureiro_1 = require("./Aventureiro");
var Mago_Negro = /** @class */ (function (_super) {
    __extends(Mago_Negro, _super);
    function Mago_Negro(nome, forca, defesa, stamina, inteligencia, agilidade) {
        var _this = _super.call(this, nome, forca, defesa, stamina, inteligencia, agilidade) || this;
        _this.Bonus_para_inteligencia = 10;
        _this.Nivel++;
        _this.Vida += 5;
        _this.Inteligencia += _this.Bonus_para_inteligencia;
        _this.Mana = 15;
        return _this;
    }
    Mago_Negro.prototype.boladefogo = function () {
        console.log(this.Nome, 'conjura uma bola de fogo destruidora!');
        this.Mana -= 5;
    };
    Mago_Negro.prototype.gasvenenoso = function () {
        console.log(this.Nome, 'expele uma nuvem de gás tóxico!');
        this.Mana -= 3;
    };
    return Mago_Negro;
}(Aventureiro_1.Aventureiro));
exports.Mago_Negro = Mago_Negro;
var magonegro = new Mago_Negro('Grave', 7, 8, 7, 10, 7);
console.log(magonegro);
magonegro.boladefogo();
console.log(magonegro);
magonegro.gasvenenoso();
console.log(magonegro);

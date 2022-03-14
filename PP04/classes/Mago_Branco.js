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
exports.Mago_Branco = void 0;
var Aventureiro_1 = require("./Aventureiro");
var Mago_Branco = /** @class */ (function (_super) {
    __extends(Mago_Branco, _super);
    function Mago_Branco(nome, forca, defesa, stamina, inteligencia, agilidade) {
        var _this = _super.call(this, nome, forca, defesa, stamina, inteligencia, agilidade) || this;
        _this.Bonus_para_inteligencia = 5;
        _this.Nivel++;
        _this.Vida += 5;
        _this.Inteligencia += _this.Bonus_para_inteligencia;
        _this.Mana = 15;
        return _this;
    }
    Mago_Branco.prototype.barreira = function () {
        console.log(this.Nome, 'conjura uma barreira protetora!');
        this.Mana -= 5;
        this.Defesa += 5;
    };
    Mago_Branco.prototype.cura = function () {
        console.log(this.Nome, 'conjura um encantamento revitalizante!');
        this.Mana -= 5;
        this.Vida += 5;
    };
    return Mago_Branco;
}(Aventureiro_1.Aventureiro));
exports.Mago_Branco = Mago_Branco;
var magobranco = new Mago_Branco('Grave', 7, 8, 7, 10, 7);
console.log(magobranco);
magobranco.barreira();
console.log(magobranco);
magobranco.cura();
console.log(magobranco);

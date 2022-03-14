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
exports.Atirador = void 0;
var Aventureiro_1 = require("./Aventureiro");
var Atirador = /** @class */ (function (_super) {
    __extends(Atirador, _super);
    function Atirador(nome, forca, defesa, stamina, inteligencia, agilidade, arma) {
        var _this = _super.call(this, nome, forca, defesa, stamina, inteligencia, agilidade) || this;
        _this.Nivel++;
        _this.Vida += 5;
        _this.Arma = arma;
        _this.Municao = 15;
        _this.Bonus_para_stamina = 2;
        _this.Bonus_para_agilidade = 5;
        _this.Bonus_para_atirar = 3;
        return _this;
    }
    Atirador.prototype.atirar = function () {
        console.log(this.Nome, 'está atirando!Bang!');
        this.Municao--;
    };
    return Atirador;
}(Aventureiro_1.Aventureiro));
exports.Atirador = Atirador;
var atirador = new Atirador('Grave', 9, 8, 8, 8, 9, 'Pistola');
console.log(atirador);
atirador.atirar();
console.log(atirador);

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
exports.Cavaleiro = void 0;
var Aventureiro_1 = require("./Aventureiro");
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(nome, forca, defesa, stamina, inteligencia, agilidade) {
        var _this = _super.call(this, nome, forca, defesa, stamina, inteligencia, agilidade) || this;
        _this.Nivel++;
        _this.Vida += 15;
        _this.Bonus_para_forca = 3;
        _this.Bonus_para_defesa = 5;
        _this.Bonus_para_stamina = 3;
        _this.Honra = 3;
        return _this;
    }
    Cavaleiro.prototype.defender = function () {
        console.log(this.Nome, 'levanta seu escudo!');
        this.Stamina--;
    };
    Cavaleiro.prototype.auradeprotecao = function () {
        console.log(this.Nome, 'protege seus aliados com sua aura sagrada!');
        this.Honra--;
    };
    return Cavaleiro;
}(Aventureiro_1.Aventureiro));
exports.Cavaleiro = Cavaleiro;
var cavaleiro = new Cavaleiro('Grave', 9, 10, 10, 7, 8);
console.log(cavaleiro);
cavaleiro.auradeprotecao();
console.log(cavaleiro);

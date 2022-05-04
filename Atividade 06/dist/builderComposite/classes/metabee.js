"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metabee = void 0;
class Metabee {
    constructor() {
        this._KbtModel = [];
    }
    getPower() {
        return this._KbtModel.reduce((sum, part) => sum + part.getPower(), 0);
    }
    getArmor() {
        return this._KbtModel.reduce((sum, part) => sum + part.getArmor(), 0);
    }
    add(...prop) {
        prop.forEach((item) => this._KbtModel.push(item));
    }
}
exports.Metabee = Metabee;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metabot = void 0;
class Metabot {
    constructor() {
        this._BotModel = [];
    }
    getPower() {
        return this._BotModel.reduce((sum, part) => sum + part.getPower(), 0);
    }
    getArmor() {
        return this._BotModel.reduce((sum, part) => sum + part.getArmor(), 0);
    }
    add(...prop) {
        prop.forEach((item) => this._BotModel.push(item));
    }
}
exports.Metabot = Metabot;

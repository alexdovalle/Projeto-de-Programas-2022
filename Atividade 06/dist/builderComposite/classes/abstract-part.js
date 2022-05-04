"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractBodyParts = void 0;
class AbstractBodyParts {
    constructor(name, power, armor) {
        this.name = name;
        this.power = power;
        this.armor = armor;
    }
    getPower() {
        return this.power;
    }
    getArmor() {
        return this.armor;
    }
}
exports.AbstractBodyParts = AbstractBodyParts;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLowerBodyParts = void 0;
class AbstractLowerBodyParts {
    constructor(name, propulsion, armor) {
        this.name = name;
        this.propulsion = propulsion;
        this.armor = armor;
    }
    getPropulsion() {
        return this.propulsion;
    }
    getArmor() {
        return this.armor;
    }
}
exports.AbstractLowerBodyParts = AbstractLowerBodyParts;

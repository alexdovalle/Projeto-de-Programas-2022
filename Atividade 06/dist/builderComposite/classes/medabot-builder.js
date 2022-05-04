"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedaBotBuilder = void 0;
const medabot_1 = require("./medabot");
const parts_1 = require("./parts");
class MedaBotBuilder {
    constructor() {
        this._bot = new medabot_1.Medabot();
    }
    reset() {
        this._bot = new medabot_1.Medabot;
        return this;
    }
    buildBot() {
        const head = new parts_1.Head('KBT-11: Missile', 32, 35);
        const l_arm = new parts_1.LeftArm('KBT-12: Revolver', 19, 30);
        const r_arm = new parts_1.RightArm('KBT-13: Sub Machine Gun', 36, 30);
        const legs = new parts_1.Legs('KBT-14: Ochitsuka', 0, 45);
        this._bot.add(head, l_arm, r_arm, legs);
        return this;
    }
    getBot() {
        return this._bot;
    }
}
exports.MedaBotBuilder = MedaBotBuilder;

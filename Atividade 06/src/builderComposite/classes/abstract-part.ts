import { BotCompositeProtocol } from "../interfaces/bot-composite-protocol";

export abstract class AbstractBodyParts implements BotCompositeProtocol{
    constructor(private name: string, private power: number, private armor: number){}

    getPower(): number {
        return this.power;
    }
    getArmor(): number {
        return this.armor;
    }
}
import { BotCompositeProtocol } from "../interfaces/bot-composite-protocol";

export class Medabot implements BotCompositeProtocol{
    private readonly _BotModel: BotCompositeProtocol[] = []
    getPower(): number {
        return this._BotModel.reduce((sum, part) => sum + part.getPower(),0);
    }
    getArmor(): number {
        return this._BotModel.reduce((sum, part) => sum + part.getArmor(),0);
    }
    add(...prop : BotCompositeProtocol[]): void{
        prop.forEach((item) => this._BotModel.push(item));
    }
    
}


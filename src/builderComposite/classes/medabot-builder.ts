import { BotBuilderProtocol } from "../interfaces/bot-builder-protocol";
import { BotCompositeProtocol } from "../interfaces/bot-composite-protocol";
import { Medabot } from "./medabot";
import { Head, LeftArm, RightArm, Legs } from "./parts";


export class MedaBotBuilder implements BotBuilderProtocol{
    private _bot : Medabot = new Medabot();
    
    reset(): this{
        this._bot = new Medabot;
        return this;
    }

    buildBot(): this {
        const head = new Head('KBT-11: Missile',32,35);
        const l_arm = new LeftArm('KBT-12: Revolver',19,30);
        const r_arm = new RightArm('KBT-13: Sub Machine Gun',36,30);
        const legs = new Legs('KBT-14: Ochitsuka',0,45);
        this._bot.add(head,l_arm,r_arm,legs);
        return this;
         
    }

    getBot(): Medabot{
    return this._bot;
    }

    
   
}

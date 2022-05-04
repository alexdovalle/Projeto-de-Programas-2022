import { MedaBotBuilder } from "./classes/medabot-builder";


const Medabee = new MedaBotBuilder();
Medabee.buildBot();
console.log(Medabee.getBot());
console.log('Total Power:');
console.log(Medabee.getBot().getPower());
console.log('Total Armor:');
console.log(Medabee.getBot().getArmor());


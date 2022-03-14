export class Item{
    Nome: string;
    Valor: number;

    constructor(nome: string, valor: number){
        this.Nome = nome;
        this.Valor = valor;
    }
}
let Espada: Item = new Item('Espada', 15);
let Escudo: Item = new Item('Escudo', 10);
let Pocao: Item = new Item('Poção', 30);
let Armadura: Item = new Item('Armadura', 50);

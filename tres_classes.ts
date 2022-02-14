class Carro{
    modelo: String;
    marca: String;
    velocidade: number = 0;
    constructor(modelo: String, marca: String){
        this.modelo = modelo;
        this.marca = marca;
    }
    acelerar(){
        this.velocidade++;
    }
}

class Personagem {
    nickname: String;
    level: number = 0;
    forca: number;
    agilidade: number;
    stamina: number;

   constructor(nick: String, forca: number, agilidade: number, stamina: number){
       this.nickname = nick;
       this.forca = forca;
       this.agilidade = agilidade;
       this.stamina = stamina;
   }
   aumentarlvl(){
       this.agilidade++;
       this.forca++;
       this.stamina++;
    }

}

class Relogio{
    horas: number;
    minutos: number;
    segundos: number;
    constructor(hora: number, minuto: number, segundo: number){
        this.horas = hora;
        this.minutos = minuto;
        this.segundos = segundo;

    }
    resetar(){
        this.horas = 0;
        this.minutos = 0;
        this.segundos = 0;
    }
}
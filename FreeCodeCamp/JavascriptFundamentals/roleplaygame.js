// Classe per rappresentare un personaggio del gioco di ruolo
class Character {
    constructor(name, health, attackPower) {
        this.name = name; // Nome del personaggio
        this.health = health; // Punti vita del personaggio
        this.attackPower = attackPower; // Potenza d'attacco del personaggio
    }
    
    // Metodo per attaccare un altro personaggio
    attack(target) {
        if (target.health > 0) { // Controlla se il bersaglio è ancora vivo
            target.health -= this.attackPower; // Riduce la salute del bersaglio
            console.log(`${this.name} attacca ${target.name} per ${this.attackPower} danni.`);
            if (target.health <= 0) {
                console.log(`${target.name} è stato sconfitto!`);
            } else {
                console.log(`${target.name} ha ${target.health} punti vita rimanenti.`);
            }
        } else {
            console.log(`${target.name} è già stato sconfitto.`);
        }
    }
}

// Creazione di due personaggi
let hero = new Character("Eroe", 100, 20);
let monster = new Character("Mostro", 80, 15);

// Simulazione del combattimento
hero.attack(monster); // L'eroe attacca il mostro
monster.attack(hero); // Il mostro contrattacca
hero.attack(monster); // L'eroe attacca di nuovo
hero.attack(monster); // L'eroe attacca finché il mostro non viene sconfitto

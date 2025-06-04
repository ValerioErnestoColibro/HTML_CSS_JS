// Definizione della classe Gradebook per gestire i voti degli studenti
class Gradebook {
    constructor() {
        // Oggetto per memorizzare gli studenti e i loro voti
        this.students = {};
    }

    // Metodo per aggiungere uno studente
    addStudent(name) {
        // Se lo studente non esiste già, inizializza un array vuoto per i voti
        if (!this.students[name]) {
            this.students[name] = [];
        }
    }

    // Metodo per aggiungere un voto ad uno studente
    addGrade(name, grade) {
        // Controlla se lo studente esiste prima di aggiungere il voto
        if (this.students[name]) {
            this.students[name].push(grade);
        } else {
            console.log(`Errore: Lo studente ${name} non esiste.`);
        }
    }

    // Metodo per calcolare la media dei voti di uno studente
    getAverage(name) {
        // Controlla se lo studente esiste e ha almeno un voto
        if (this.students[name] && this.students[name].length > 0) {
            let grades = this.students[name]; // Recupera l'array dei voti
            let sum = grades.reduce((acc, grade) => acc + grade, 0); // Somma tutti i voti
            return sum / grades.length; // Calcola la media
        } else {
            console.log(`Errore: Lo studente ${name} non ha voti.`);
            return null;
        }   
    }

    // Metodo per stampare il registro voti
    printGradebook() {
        console.log("Registro Voti:");
        for (let student in this.students) {
            console.log(`${student}: ${this.students[student].join(", ")}`);
        }
    }
}
    // Creazione di un'istanza del registro voti
    let myGradebook = new Gradebook();

    // Aggiunta di studenti
    myGradebook.addStudent("Alice");
    myGradebook.addStudent("Bob");

    // Aggiunta di voti agli studenti
    myGradebook.addGrade("Alice", 90);
    myGradebook.addGrade("Alice", 85);
    myGradebook.addGrade("Bob", 78);
    myGradebook.addGrade("Bob", 82);

    // Calcolo della media dei voti
    console.log("Media voti di Alice:", myGradebook.getAverage("Alice"));
    console.log("Media voti di Bob:", myGradebook.getAverage("Bob"));

    // Stampa dell'intero registro voti
    myGradebook.printGradebook();

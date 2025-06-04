// Funzione per generare una piramide con il numero di righe specificato
type="code/javascript"
function generatePyramid(rows) {
    // Ciclo esterno: controlla il numero di righe della piramide
    for (let i = 1; i <= rows; i++) {
        // Creazione della stringa degli spazi per centrare la piramide
        let spaces = ' '.repeat(rows - i);
        
        // Creazione della stringa con gli asterischi, aumentando di 2 ogni riga
        let stars = '*'.repeat(2 * i - 1);
        
        // Stampa della riga formata da spazi + asterischi
        console.log(spaces + stars);
    }
}

// Chiamata della funzione con un esempio di 5 righe
generatePyramid(5);

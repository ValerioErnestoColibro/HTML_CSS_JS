// Seleziona il modulo e gli elementi del form
const form = document.getElementById("calorieForm");
const foodInput = document.getElementById("food");
const caloriesInput = document.getElementById("calories");
const list = document.getElementById("calorieList");
const totalCalories = document.getElementById("totalCalories");

let total = 0; // Variabile per tracciare le calorie totali

// Funzione per aggiornare il totale delle calorie
function updateTotal() {
    totalCalories.textContent = `Calorie Totali: ${total}`;
}

// Aggiunge un evento "submit" al modulo
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il ricaricamento della pagina
    
    const food = foodInput.value.trim(); // Ottiene e pulisce il valore dell'input cibo
    const calories = parseInt(caloriesInput.value.trim(), 10); // Converte l'input calorie in numero
    
    // Controlla se gli input sono validi
    if (food === "" || isNaN(calories) || calories <= 0) {
        alert("Inserisci un nome valido per il cibo e un numero positivo per le calorie.");
        return;
    }
    
    // Crea un nuovo elemento della lista
    const listItem = document.createElement("li");
    listItem.textContent = `${food}: ${calories} calorie`;
    list.appendChild(listItem); // Aggiunge il nuovo elemento alla lista
    
    total += calories; // Aggiorna il totale delle calorie
    updateTotal(); // Aggiorna la visualizzazione del totale
    
    // Resetta i campi di input
    foodInput.value = "";
    caloriesInput.value = "";
});

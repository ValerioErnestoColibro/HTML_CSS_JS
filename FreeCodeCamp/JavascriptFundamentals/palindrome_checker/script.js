const textInput = document.getElementById("text-input"); // Ottiene l'elemento di input dal DOM
const checkButton = document.getElementById("check-btn"); // Ottiene il pulsante di controllo dal DOM
const result = document.getElementById("result"); // Ottiene l'elemento dove verrà mostrato il risultato
checkButton.addEventListener("click", () => { // Aggiunge un evento click al pulsante
  const lowerReplaced = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g,"") // Converte il testo in minuscolo e rimuove i caratteri non alfanumerici
  if (textInput.value === ""){ // Controlla se l'input è vuoto
    alert("Inserisci una parola valida") // Mostra un avviso se l'input è vuoto
  } else if (textInput.value.length === 1) { // Controlla se l'input ha un solo carattere
result.innerText = `${textInput.value} è una parola palindroma` // Un singolo carattere è sempre un palindromo
  } else if (lowerReplaced === [...lowerReplaced].reverse().join("")) { // Controlla se il testo è uguale al suo inverso
result.innerText = `${textInput.value} è una parola palindroma` // Mostra che il testo è un palindromo
  } else { // Se nessuna delle condizioni precedenti è soddisfatta
    result.innerText = `${textInput.value} non è una parola palindroma` // Mostra che il testo non è un palindromo
  }
});

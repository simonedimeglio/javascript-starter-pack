// Funzione semplice (senza argomenti)
function saluta() {
  console.log("Ciao! Benvenuti nell'Academy per Frontend Developer.");
}
saluta(); // Stampa "Ciao! Benvenuti nell'Academy per Frontend Developer!."





// Funzione con argomenti
function somma(a, b) {
  var risultato = a + b;
  console.log("La somma di " + a + " e " + b + " è " + risultato + ".");
}
somma(3, 4); // Stampa "La somma di 3 e 4 è 7."





// Funzione con valore di ritorno
function quadrato(numero) {
  return numero * numero;
}
var risultato = quadrato(5);
console.log("Il quadrato di 5 è " + risultato + "."); // Stampa "Il quadrato di 5 è 25."





// Funzione anonima assegnata ad una variabile
var saluto = function() {
  console.log("Buongiorno!");
};
saluto(); // Stampa "Buongiorno!"



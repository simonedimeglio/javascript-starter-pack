**Esercizio: Trova il numero maggiore**
Scrivi un programma JavaScript che chieda all'utente di inserire due numeri utilizzando il metodo `prompt`. Il programma quindi determinerà quale dei due numeri inseriti è il maggiore e stamperà il risultato sulla console.

**Soluzione:**

```javascript
var primoNumero = prompt("Inserisci il primo numero:");
var secondoNumero = prompt("Inserisci il secondo numero:");

primoNumero = Number(primoNumero);
secondoNumero = Number(secondoNumero);

if (primoNumero > secondoNumero) {
  console.log("Il primo numero è il maggiore: " + primoNumero);
} else if (primoNumero < secondoNumero) {
  console.log("Il secondo numero è il maggiore: " + secondoNumero);
} else {
  console.log("I due numeri sono uguali.");
}
```

In questo esercizio, chiediamo all'utente di inserire due numeri utilizzando `prompt`. Assicurati di convertire le stringhe ottenute in numeri utilizzando la funzione `Number()`. Quindi, utilizzando un'istruzione `if-else if-else`, confrontiamo i due numeri e stampiamo il risultato corrispondente sulla console.

Abbiamo utilizzato il metodo `Number()` per convertire le stringhe ottenute dall'input dell'utente in valori numerici effettivi. Questo è necessario perché quando si legge l'input dell'utente tramite il metodo `prompt`, il valore restituito è sempre una stringa, indipendentemente dal fatto che l'utente abbia inserito un numero.

Per eseguire confronti numerici accurati o eseguire operazioni matematiche sui valori, è importante che le stringhe siano convertite in numeri. Ecco perché abbiamo utilizzato `Number()` per effettuare questa conversione.

Ad esempio, supponiamo che l'utente abbia inserito i numeri "10" e "5" tramite i prompt. Senza la conversione in numeri, se confrontiamo semplicemente le stringhe "10" e "5", otterremo un confronto basato sull'ordinamento lessicografico delle stringhe, anziché un confronto numerico corretto.

Esempio senza conversione:

```javascript
var primoNumero = prompt("Inserisci il primo numero:");
var secondoNumero = prompt("Inserisci il secondo numero:");

if (primoNumero > secondoNumero) {
  console.log("Il primo numero è il maggiore");
} else if (primoNumero < secondoNumero) {
  console.log("Il secondo numero è il maggiore");
} else {
  console.log("I due numeri sono uguali");
}
```

Se l'utente ha inserito "10" come primo numero e "5" come secondo numero, l'output del codice sopra sarà "Il secondo numero è il maggiore", che è un risultato errato perché il confronto viene effettuato in base all'ordinamento lessicografico delle stringhe.

Esempio con conversione:

```javascript
var primoNumero = prompt("Inserisci il primo numero:");
var secondoNumero = prompt("Inserisci il secondo numero:");

primoNumero = Number(primoNumero);
secondoNumero = Number(secondoNumero);

if (primoNumero > secondoNumero) {
  console.log("Il primo numero è il maggiore");
} else if (primoNumero < secondoNumero) {
  console.log("Il secondo numero è il maggiore");
} else {
  console.log("I due numeri sono uguali");
}
```

In questo esempio, abbiamo utilizzato `Number()` per convertire le stringhe in numeri prima di effettuare il confronto. Ora l'output corretto sarà "Il primo numero è il maggiore" perché i valori sono stati convertiti in numeri prima del confronto.

Quindi, utilizzando `Number()` per convertire le stringhe in numeri, possiamo ottenere confronti numerici corretti e operare su di essi come valori numerici effettivi.

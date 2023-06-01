**Esercizio: Calcola la somma di 10 numeri**
Scrivi un programma JavaScript che chiede all'utente di inserire 10 numeri utilizzando il metodo `prompt`. Il programma quindi calcolerà la somma di tutti i numeri inseriti e la stamperà sulla console.

**Soluzione:**

```javascript
var somma = 0;

for (var i = 1; i <= 10; i++) {
  var numero = Number(prompt("Inserisci il numero " + i + ":"));
  somma += numero;
}

console.log("La somma dei numeri inseriti è: " + somma);
```

In questo esercizio, utilizziamo un ciclo `for` per chiedere all'utente di inserire 10 numeri. Utilizziamo una variabile `i` per tener traccia del numero di iterazione.

All'interno del ciclo, chiediamo all'utente di inserire un numero utilizzando `prompt` e lo convertiamo in un numero utilizzando `Number()`. Quindi, aggiungiamo il numero alla variabile `somma`.

Alla fine del ciclo, stampiamo il risultato della somma sulla console utilizzando `console.log`.
**Esercizio: Trova la parola più corta e la parola più lunga**
Scrivi un programma JavaScript che chieda all'utente di inserire due parole utilizzando il metodo `prompt`. Il programma quindi determinerà quale delle due parole inserite è più corta e quale è più lunga, e stamperà prima la parola più corta e poi la parola più lunga sulla console.

**Soluzione:**

```javascript
var primaParola = prompt("Inserisci la prima parola:");
var secondaParola = prompt("Inserisci la seconda parola:");

var lunghezzaPrimaParola = primaParola.length;
var lunghezzaSecondaParola = secondaParola.length;

if (lunghezzaPrimaParola < lunghezzaSecondaParola) {
  console.log("La parola più corta è: " + primaParola);
  console.log("La parola più lunga è: " + secondaParola);
} else if (lunghezzaPrimaParola > lunghezzaSecondaParola) {
  console.log("La parola più corta è: " + secondaParola);
  console.log("La parola più lunga è: " + primaParola);
} else {
  console.log("Le due parole hanno la stessa lunghezza.");
}
```

In questo esercizio, chiediamo all'utente di inserire due parole utilizzando `prompt`. Salviamo la lunghezza di entrambe le parole utilizzando la proprietà `length` delle stringhe.

Successivamente, utilizzando un'istruzione `if-else if-else`, confrontiamo la lunghezza delle due parole e stampiamo il risultato corrispondente sulla console. Se la lunghezza della prima parola è minore della lunghezza della seconda parola, stampiamo prima la parola più corta e poi la parola più lunga. 

Viceversa, se la lunghezza della prima parola è maggiore della lunghezza della seconda parola, stampiamo prima la parola più corta e poi la parola più lunga. Se le due parole hanno la stessa lunghezza, stampiamo un messaggio appropriato.
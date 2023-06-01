## Funzioni
Le funzioni sono un aspetto fondamentale di JavaScript e svolgono un ruolo cruciale nel riutilizzo del codice e nell'organizzazione logica del programma. 

Una funzione in JavaScript è un **blocco di codice che può essere richiamato per eseguire un'operazione specifica**. 

Ecco un esempio di dichiarazione di una funzione:

```javascript
function saluta(nome) {
  console.log("Ciao, " + nome + "!");
}
```

In questo esempio, abbiamo dichiarato una funzione chiamata `saluta` che accetta un parametro `nome`. Quando la funzione viene chiamata, il valore dell'argomento `nome` viene utilizzato per stampare un messaggio di saluto nella console.

Per richiamare la funzione e eseguire il suo codice, utilizziamo il nome della funzione seguito da parentesi tonde e, se necessario, forniamo i valori degli argomenti:

```javascript
saluta("Alice"); // Stampa "Ciao, Alice!"
```

Possiamo anche definire funzioni che restituiscono un valore utilizzando l'istruzione `return`:

```javascript
function somma(a, b) {
  return a + b;
}
```

In questo esempio, la funzione `somma` accetta due argomenti `a` e `b` e restituisce la somma dei due valori. Possiamo quindi utilizzare il valore restituito dalla funzione come segue:

```javascript
var risultato = somma(3, 4);
console.log(risultato); // Stampa 7
```

Le funzioni possono anche essere assegnate a variabili o utilizzate come argomenti per altre funzioni. Questo concetto è noto come "*funzioni di prima classe*" in JavaScript.

Le funzioni possono essere definite in modo esplicito utilizzando la dichiarazione `function`, o possono essere assegnate come espressioni di funzione anonima a variabili. Possiamo anche creare funzioni utilizzando la sintassi delle "arrow function" (funzioni freccia) introdotta in JavaScript ES6.

Le funzioni possono anche avere **variabili locali** e **variabili globali**, che determinano la loro visibilità all'interno e all'esterno della funzione stessa.

Le funzioni giocano un ruolo importante nella scrittura di codice modulare, organizzato e riutilizzabile. Possono essere utilizzate per scomporre compiti complessi in blocchi più gestibili e per promuovere la riusabilità del codice.
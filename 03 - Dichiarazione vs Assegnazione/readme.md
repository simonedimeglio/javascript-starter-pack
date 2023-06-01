## Dichiarazione di variabili e assegnazione di valori

Ecco una spiegazione sulla differenza tra la **dichiarazione di variabili** e l'**assegnazione di valori** in JavaScript:

La dichiarazione di una variabile in JavaScript avviene utilizzando la parola chiave `var`, `let` o `const` (*NB: analizzeremo meglio let e const con l'introduzione di* **ES6**), seguita dal nome che vogliamo assegnare alla variabile. 

Ad esempio:

```javascript
var nome;
```

Nell'esempio sopra, abbiamo dichiarato la variabile `nome`. Quando dichiariamo una variabile, stiamo essenzialmente riservando un **posto di memoria** per archiviare un valore. Tuttavia, in questo momento, la variabile è considerata "*non inizializzata*" o "*undefined*" perché non è stato assegnato alcun valore.

L'assegnazione di valori avviene successivamente, quando vogliamo attribuire un valore specifico a una variabile precedentemente dichiarata. Ad esempio:

```javascript
nome = "Alice";
```

Nell'esempio sopra, abbiamo assegnato il valore "Alice" alla variabile `nome`. Da questo momento, la variabilie`nome` contiene il valore che le abbiamo assegnato.

È importante notare che quando dichiariamo una variabile utilizzando `var`, possiamo assegnarle un valore in seguito. 

Questo significa che una variabile può essere dichiarata e inizializzata in istanze separate. Ad esempio:

```javascript
var cognome;
cognome = "Smith";
```

Nell'esempio sopra, abbiamo dichiarato la variabile `cognome` e successivamente assegnato il valore "Smith" ad essa.

In sintesi, la dichiarazione di una variabile riserva un posto di memoria per archiviare un valore, mentre l'assegnazione di valori attribuisce un valore specifico a una variabile precedentemente dichiarata.
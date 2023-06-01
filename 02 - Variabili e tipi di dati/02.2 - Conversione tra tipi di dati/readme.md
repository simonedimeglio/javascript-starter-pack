## Conversione tra tipi di dati

La conversione tra diversi tipi di dati è un'operazione comune in JavaScript. 
Vediamo alcuni esempi di conversione tra i tipi di dati più comuni:

**Conversione da stringa a numero:**

```javascript
var numeroStringa = "42";
var numero = Number(numeroStringa);
console.log(numero); // Output: 42
```

In questo esempio, abbiamo una stringa `"42"` e vogliamo convertirla in un numero. Utilizziamo la funzione `Number()` per effettuare la conversione. Il risultato sarà un numero `42`.

**Conversione da numero a stringa:**

```javascript
var numero = 42;
var numeroStringa = String(numero);
console.log(numeroStringa); // Output: "42"
```

In questo caso, abbiamo un numero `42` e desideriamo convertirlo in una stringa. Utilizziamo la funzione `String()` per eseguire la conversione. Il risultato sarà una stringa `"42"`.

**Conversione da stringa a booleano:**

```javascript
var valoreStringa = "true";
var valoreBooleano = Boolean(valoreStringa);
console.log(valoreBooleano); // Output: true
```

In questo esempio, abbiamo una stringa `"true"` e vogliamo convertirla in un valore booleano. Utilizziamo la funzione `Boolean()` per eseguire la conversione. Il risultato sarà un booleano `true`.

**Conversione da booleano a stringa:**

```javascript
var valoreBooleano = true;
var valoreStringa = String(valoreBooleano);
console.log(valoreStringa); // Output: "true"
```

Qui, abbiamo un valore booleano `true` e desideriamo convertirlo in una stringa. Utilizziamo la funzione `String()` per eseguire la conversione. Il risultato sarà una stringa `"true"`.

**Conversione tra tipi di dati diversi:**

```javascript
var numero = 42;
var numeroStringa = String(numero);
var numeroNuovamente = Number(numeroStringa);
console.log(numeroNuovamente); // Output: 42
```

In questo esempio, abbiamo un numero `42` che convertiamo in una stringa `"42"` utilizzando la funzione `String()`. Successivamente, convertiamo nuovamente la stringa `"42"` in un numero utilizzando `Number()`. Il risultato finale sarà di nuovo il numero `42`.
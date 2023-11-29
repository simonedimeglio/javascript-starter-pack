# Async & Await

`async`/`await` è una caratteristica di JavaScript introdotta con ECMAScript 2017 che semplifica la gestione delle operazioni asincrone. 

Questa sintassi rende il codice più leggibile e più simile a quello sincrono, riducendo la complessità delle Promise e delle callback.

**`async`:**

-   La parola chiave `async` viene utilizzata per dichiarare una funzione asincrona. **Una funzione asincrona restituirà sempre una Promise**, e la risoluzione della Promise sarà il valore restituito dalla funzione asincrona.
>  

    async function miaFunzioneAsincrona() {
         // Logica asincrona
	     return risultato;
	}

**`await`:**

-   La parola chiave `await` può essere utilizzata all'interno di una funzione asincrona per attendere il completamento di un'altra Promise. Rende l'esecuzione della funzione asincrona in pausa fino a quando la Promise è risolta, e quindi restituisce il risultato.
>  

    async  function  utilizzaPromise() { 
	    const risultato = await miaPromise; 
	    // Logica da eseguire dopo il completamento della Promise 
    }


### Come Funziona `async`/`await`?

 **Dichiarazione di una Funzione Asincrona:**
    
Utilizzando la parola chiave `async`, dichiari una funzione asincrona che restituirà sempre una Promise.

**Utilizzo di `await` per Gestire Promise:**

All'interno della funzione asincrona, puoi utilizzare la parola chiave `await` per attendere il completamento di una Promise.

**Gestione degli Errori:**

Puoi gestire gli errori con un blocco `try`/`catch` come faresti con le Promise tradizionali.

### A Cosa Serve `async`/`await`?

-   **Leggibilità del Codice:**
    
    -   Semplifica il codice asincrono, rendendolo più simile a quello sincrono, migliorando la sua leggibilità e comprensione.
-   **Gestione Naturale degli Errori:**
    
    -   La gestione degli errori diventa più simile a quella di un blocco `try`/`catch`, rendendo più intuitivo gestire eventuali problemi durante l'esecuzione asincrona.
-   **Sequenzialità:**
    
    -   Permette di scrivere il codice asincrono in modo più sequenziale, evitando il callback hell e semplificando la struttura del codice.
-   **Compatibilità con le Promise:**
    
    -   `async`/`await` è compatibile con le Promise esistenti, rendendo più agevole la transizione e l'integrazione in codice già esistente.

In generale, `async`/`await` è un potente strumento per semplificare la scrittura di codice asincrono in JavaScript, rendendo il tuo codice più pulito e più comprensibile.
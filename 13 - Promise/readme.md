
# Cosa sono le Promise?

Le Promise sono **oggetti** in JavaScript che rappresentano il *completamento* o il *fallimento* di un'operazione asincrona. 

Le Promise sono utilizzate per gestire il flusso di controllo nei casi in cui le operazioni richiedono del tempo, *come le richieste HTTP*, *il recupero di dati da un database o il caricamento di file*.

### Caratteristiche Principali:

1.  **Stato:**
    
    -   Le Promise possono trovarsi in uno di tre stati: `pending` (in attesa), `fulfilled` (completata con successo), o `rejected` (fallita).
2.  **Metodi:**
    
    -   Una Promise ha due metodi principali: `then` (gestisce il successo) e `catch` (gestisce il fallimento). Questi metodi accettano funzioni di callback da eseguire quando la Promise è risolta o respinta.
3.  **Async/Await:**
    
    -   Le Promise possono essere utilizzate con le parole chiave `async` e `await` per semplificare la gestione del flusso asincrono e rendere il codice più leggibile.


### Tutte le funzioni restituiscono una Promise? 
No, non tutte le funzioni restituiscono una Promise. Le Promise vengono utilizzate principalmente per gestire operazioni asincrone in JavaScript, e non tutte le operazioni o le funzioni in JavaScript sono asincrone o basate su Promise.

### Sintassi
1.  **Creazione di una Promise:**
    
    -   `new Promise((resolve, reject) => {...})`: Creiamo una nuova Promise passando una funzione di callback che prende due parametri: `resolve` e `reject`. Questi sono due callback che utilizzeremo per indicare se l'operazione asincrona è stata completata con successo (`resolve`) o se è fallita (`reject`).
2.  **Operazione Asincrona:**
    
    -   All'interno della callback della Promise, includiamo la logica dell'operazione asincrona. Questa parte può coinvolgere il recupero di dati da un server, la lettura di un file, o qualsiasi altra attività che richiede del tempo.
3.  **Risoluzione o Reiezione della Promise:**
    
    -   Chiamiamo `resolve(result)` se l'operazione è completata con successo, passando l'eventuale risultato come argomento. Altrimenti, chiamiamo `reject(error)` se l'operazione fallisce, passando un eventuale messaggio di errore.
4.  **Utilizzo della Promise con then e catch:**
    
    -   Dopo la creazione della Promise, utilizziamo il metodo `then` per specificare cosa fare quando la Promise è risolta con successo. Passiamo una funzione di callback che riceverà il risultato della risoluzione.
    -   Utilizziamo il metodo `catch` per specificare cosa fare se la Promise è respinta (fallisce). Passiamo una funzione di callback che riceverà il motivo della respinta.



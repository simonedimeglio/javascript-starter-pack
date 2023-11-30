# Try/Catch

In JavaScript, il blocco `try/catch` è utilizzato per gestire eventuali errori durante l'esecuzione del codice.

**`try`:** Nel try inseriamo il codice che "potrebbe" generare un errore.

    try {
        // Codice che potrebbe generare un errore
    }

**`catch`:** Se si verifica un errore nel blocco `try`, il controllo passa automaticamente al blocco `catch`, dove possiamo gestire l'errore.

    try {
        // Codice che potrebbe generare un errore
    } catch (errore) {
        // Gestisci l'errore qui
    }

`errore` è una variabile che conterrà informazioni sull'errore che è stato generato. Potete chiamarla come preferite, ma è una buona pratica usare una notazione descrittiva (_tipo "error"_)!

`finally`: Il blocco `finally` in JavaScript è utilizzato per definire un blocco di codice che verrà eseguito sempre, indipendentemente dal fatto che si verifichi o meno un errore nel blocco `try`. Anche se c'è un `catch` o se il blocco `try` viene eseguito senza errori, il blocco `finally` verrà comunque eseguito.

**Esempio Completo:**

    try {
        // Tentativo di eseguire il codice che potrebbe generare un errore
        let risultato = 10 / 0; // Questo genererà un errore di divisione per zero
        console.log(risultato); // Questa riga non verrà eseguita a causa dell'errore
    } catch (errore) {
        // Gestione dell'errore
        console.error("Si è verificato un errore:", errore.message);
    } finally {
        // Il blocco finally viene eseguito sempre, indipendentemente dal fatto che ci sia un errore o meno
        console.log("Questo viene eseguito sempre");
    }

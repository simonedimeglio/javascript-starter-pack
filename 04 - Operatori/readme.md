## Operatori

Gli operatori sono simboli speciali che vengono utilizzati per **eseguire operazioni** su uno o più valori **e restituire un risultato**. In JavaScript, ci sono diversi tipi di operatori che possono essere suddivisi in categorie comuni: *operatori aritmetici, operatori di confronto, operatori logici e operatori di assegnazione*.

1.  **Operatori aritmetici**: Gli operatori aritmetici vengono utilizzati per eseguire operazioni matematiche sui valori. Ecco alcuni esempi di operatori aritmetici in JavaScript:

-   `+` (addizione): Esegue l'addizione tra due valori.
-   `-` (sottrazione): Sottrae un valore da un altro.
-   `*` (moltiplicazione): Moltiplica due valori.
-   `/` (divisione): Divide un valore per un altro.
-   `%` (modulo): Restituisce il resto della divisione tra due valori.

2.  **Operatori di confronto**: Gli operatori di confronto vengono utilizzati per confrontare i valori e restituire un valore booleano (true o false) che indica se la condizione è vera o falsa. Ecco alcuni esempi di operatori di confronto:

-   `==` (uguaglianza): Verifica se due valori sono uguali.
-   `!=` (diverso): Verifica se due valori sono diversi.
-   `>` (maggiore di): Verifica se il primo valore è maggiore del secondo.
-   `<` (minore di): Verifica se il primo valore è minore del secondo.
-   `>=` (maggiore o uguale a): Verifica se il primo valore è maggiore o uguale al secondo.
-   `<=` (minore o uguale a): Verifica se il primo valore è minore o uguale al secondo.

3.  **Operatori logici**: Gli operatori logici vengono utilizzati per combinare o invertire condizioni booleane. Ecco alcuni esempi di operatori logici:

-   `&&` (AND logico): Restituisce true se entrambe le condizioni sono vere.
-   `||` (OR logico): Restituisce true se almeno una delle condizioni è vera.
-   `!` (NOT logico): Inverte il valore di verità di una condizione.

4.  **Operatori di assegnazione**: Gli operatori di assegnazione vengono utilizzati per assegnare valori a variabili. Ecco alcuni esempi di operatori di assegnazione:

-   `=` (assegnazione): Assegna un valore a una variabile.
-   `+=` (assegnazione con addizione): Aggiunge un valore alla variabile e assegna il risultato.
-   `-=` (assegnazione con sottrazione): Sottrae un valore dalla variabile e assegna il risultato.
-   `*=` (assegnazione con moltiplicazione): Moltiplica e assegna il risultato.
-   `/=` (assegnazione con divisione): Divide la variabile per un valore e assegna il risultato.

Per combinare più operatori in espressioni complesse, è possibile utilizzare le parentesi per specificare l'ordine di valutazione e garantire che le operazioni vengano eseguite correttamente. Questo concetto è noto come "**precedenza degli operatori**".

Ad esempio, considera l'espressione seguente:

```javascript
var risultato = 5 + 3 * 2;
```

In questa espressione, l'operatore di moltiplicazione `*` ha una precedenza superiore rispetto all'operatore di addizione `+`. Quindi, la moltiplicazione viene eseguita prima dell'addizione. Il risultato sarà 11 perché 3 * 2 viene valutato prima di sommare 5.

Tuttavia, se volessimo eseguire l'addizione prima della moltiplicazione, possiamo utilizzare le parentesi per modificare l'ordine di valutazione:

```javascript
var risultato = (5 + 3) * 2;
```

In questo caso, l'espressione all'interno delle parentesi viene valutata prima dell'operatore di moltiplicazione. Il risultato sarà 16 perché l'addizione 5 + 3 viene eseguita prima e il risultato viene poi moltiplicato per 2.

È importante comprendere la precedenza degli operatori e utilizzare le parentesi quando necessario per ottenere il risultato desiderato nelle espressioni complesse.

Inoltre, è possibile combinare più operatori logici, ad esempio:

```javascript
var risultato = (a > b) && (c < d) || (e === f);
```

In questa espressione, gli operatori di confronto `>`, `<` e `===` vengono valutati prima degli operatori logici `&&` e `||`. Le parentesi possono essere utilizzate per stabilire la precedenza desiderata.

> Una buona pratica? utilizzare le parentesi in modo chiaro
> e leggibile per evitare ambiguità nell'ordine di valutazione degli
> operatori!

## Oggetti e Classi
Gli oggetti sono un aspetto fondamentale di JavaScript e consentono di organizzare dati e funzionalità correlate in una singola entità. Vediamo come funzionano gli oggetti e le classi in JavaScript:

**Oggetti in JavaScript:**
Un oggetto in JavaScript è una collezione di coppie chiave-valore, dove le chiavi sono stringhe (o simboli) che identificano le proprietà e i valori possono essere di qualsiasi tipo di dati, come numeri, stringhe, booleani, array, altri oggetti, funzioni e così via. Ecco un esempio di creazione di un oggetto:

```javascript
var persona = {
  nome: "Marco",
  eta: 30,
  professione: "Developer",
  saluta: function() {
    console.log("Ciao, sono " + this.nome + "!");
  }
};
```

In questo esempio, abbiamo creato un oggetto `persona` con tre proprietà (`nome`, `eta`, `professione`) e un metodo `saluta`. Possiamo accedere alle proprietà dell'oggetto utilizzando la sintassi del punto o la sintassi delle parentesi quadre:

```javascript
console.log(persona.nome); // Stampa "Marco"
console.log(persona["eta"]); // Stampa 30
```

Possiamo anche chiamare i metodi dell'oggetto utilizzando la sintassi del punto:

```javascript
persona.saluta(); // Stampa "Ciao, sono Marco!"
```

**Classi in JavaScript:**
Le classi in JavaScript sono una forma di sintassi più moderna per creare oggetti. Una classe definisce un modello o uno stampo da cui creare oggetti. Ecco un esempio di definizione di classe:

```javascript
class Persona {
  constructor(nome, eta, professione) {
    this.nome = nome;
    this.eta = eta;
    this.professione = professione;
  }

  saluta() {
    console.log("Ciao, sono " + this.nome + "!");
  }
}
```

In questo esempio, abbiamo definito una classe `Persona` con un costruttore che accetta tre argomenti (`nome`, `eta`, `professione`) e un metodo `saluta`. Possiamo creare nuovi oggetti utilizzando la classe `Persona` con l'operatore `new`:

```javascript
var persona1 = new Persona("Bob", 30, "Designer");
var persona2 = new Persona("Alice", 25, "Developer");

console.log(persona1.nome); // Stampa "Bob"
console.log(persona2.professione); // Stampa "Developer"

persona1.saluta(); // Stampa "Ciao, sono Bob!"
persona2.saluta(); // Stampa "Ciao, sono Alice!"
```

Le classi offrono un approccio più strutturato per creare oggetti e consentono di definire proprietà e metodi comuni per tutti gli oggetti creati da quella classe.
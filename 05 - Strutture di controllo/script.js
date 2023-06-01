// IF - ELSE
var numero = 10;
if (numero > 0) {
  console.log("Il numero è positivo");
} else if (numero < 0) {
  console.log("Il numero è negativo");
} else {
  console.log("Il numero è zero");
}



// FOR
for (var i = 0; i < 5; i++) {
  console.log("Iterazione " + (i + 1));
}



// WHILE
var i = 0;
i < 5) {
  console.log("Iterazione " + (i + 1));
  i++;
}



// DO - WHILE
var i = 0;
do {
  console.log("Iterazione " + (i + 1));
  i++;
} while (i < 5);



// SWITCH
var giorno = "Martedì";
switch (giorno) {
  case "Lunedì":
    console.log("Oggi è Lunedì");
    break;
  case "Martedì":
    console.log("Oggi è Martedì");
    break;
  case "Mercoledì":
    console.log("Oggi è Mercoledì");
    break;
  default:
    console.log("Oggi non è un giorno della settimana");
}



// BREAK
for (var i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Iterazione " + (i + 1));
}



// CONTINUE
for (var i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log("Iterazione " + (i + 1));
}

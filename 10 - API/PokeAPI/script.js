/* 
Questa riga dichiara una funzione asincrona 
chiamata getRandomPokemon. Le funzioni asincrone 
sono utilizzate quando si eseguono operazioni 
asincrone, come le chiamate di rete, 
e ci consentono di utilizzare await 
per gestire le promesse in modo più leggibile.
*/
async function getRandomPokemon() {
	const response = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + getRandomNumber(1, 151),
	);
	/*
  Qui stiamo usando l'operatore await 
  per aspettare che la promessa restituita 
  dalla funzione fetch sia risolta. 
  fetch è una funzione che fa una richiesta HTTP,
  in questo caso a un'API che restituisce dati 
  sui Pokémon. La risposta della richiesta è 
  memorizzata nella variabile response.
  */

	const data = await response.json();
	/* 
  Ancora una volta, usiamo await per aspettare 
  che la promessa restituita da response.json() 
  sia risolta. Questo estrae i dati JSON dalla 
  risposta e li memorizza nella variabile data.
  */

	const pokemonContainer = document.getElementById("pokemon-container");
	pokemonContainer.innerHTML = "";
  /*
  Queste due righe servono a ottenere un 
  riferimento al contenitore del Pokémon nel DOM 
  (pokemon-container) e a pulire eventuali 
  dati precedenti al suo interno.
  */

	const pokemonCard = document.createElement("div");
	pokemonCard.classList.add("pokemon-card");

	const pokemonName = document.createElement("h2");
	pokemonName.textContent = data.name;

	const pokemonImage = document.createElement("img");
	pokemonImage.src = data.sprites.front_default;
	pokemonImage.alt = data.name;
	pokemonImage.classList.add("pokemon-img");

	pokemonCard.appendChild(pokemonName);
	pokemonCard.appendChild(pokemonImage);

	pokemonContainer.appendChild(pokemonCard);
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

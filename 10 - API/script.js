// Inizializza la variabile per il numero di post caricati
let postsCaricati = 3; // Inizialmente carica i primi tre post
const postPerCarica = 8; // Carica gli altri otto post in seguito

// Aggiunge un evento click al pulsante "Carica altri post"
document.getElementById("caricaAltri").addEventListener("click", caricaAltri);

// Funzione per caricare i dati iniziali
function caricaDati() {
	// Costruisce l'URL per la chiamata API con il numero di post da caricare
	const apiUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${postsCaricati}`;

	// Effettua la chiamata API utilizzando Fetch
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			// Chiamata quando i dati sono stati ottenuti con successo
			renderizzaDati(data);
		})
		.catch((error) => {
			// Chiamata in caso di errore durante la chiamata API
			console.error("Si è verificato un errore:", error);
		});
}

// Funzione per caricare ulteriori post
function caricaAltri() {
	// Incrementa il numero di post da caricare
	postsCaricati += postPerCarica;
	// Richiama la funzione per caricare i dati
	caricaDati();
}

// Funzione per renderizzare i dati ottenuti dalla chiamata API
function renderizzaDati(data) {
	// Ottiene il container degli elementi dove verranno visualizzati i post
	const postContainer = document.getElementById("postContainer");
	// Svuota il container per evitare duplicati
	postContainer.innerHTML = "";

	// Itera attraverso i post ottenuti dalla chiamata API
	data.forEach((post) => {
		// Crea un elemento card per ogni post
		const card = document.createElement("div");
		card.className = "card";
		card.setAttribute("data-id", post.id);
		card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
		// Aggiunge la card al container
		postContainer.appendChild(card);
	});

	// Aggiunge un evento click al container per gestire il click su una card
	postContainer.addEventListener("click", mostraDettagliPost);
}

// Funzione per gestire il click su una card e reindirizzare alla pagina "dettagli.html"
function mostraDettagliPost(event) {
	const cardCliccata = event.target.closest(".card");

	if (cardCliccata) {
		// Ottiene l'ID del post dalla card cliccata
		const postId = cardCliccata.getAttribute("data-id");
		// Reindirizza alla pagina "dettagli.html" con l'ID del post come parametro nell'URL
		window.location.href = `dettagli.html?id=${postId}`;
	}
}

// Funzione per visualizzare i dettagli di un post
function visualizzaDettagliPost(postId) {
	// Costruisce l'URL per la chiamata API con l'ID del post
	const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

	// Effettua la chiamata API utilizzando Fetch
	fetch(apiUrl)
		.then((response) => response.json())
		.then((post) => {
			// Ottiene l'elemento dove verranno visualizzati i dettagli del post
			const dettagliDiv = document.getElementById("dettagliPost");
			// Visualizza i dettagli del post nell'elemento
			dettagliDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p>ID: ${post.id}</p>
            `;
		})
		.catch((error) => {
			// Chiamata in caso di errore durante la chiamata API per ottenere i dettagli del post
			console.error(
				"Si è verificato un errore durante il recupero dei dettagli del post:",
				error,
			);
		});
}

// Richiama la funzione per caricare i dati all'avvio
caricaDati();

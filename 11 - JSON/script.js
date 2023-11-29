// Funzione principale che si attiva quando il documento HTML è completamente caricato
document.addEventListener("DOMContentLoaded", function () {
	// Ottenere riferimenti agli elementi del DOM
	const postsContainer = document.getElementById("posts-container");
	const addPostForm = document.getElementById("add-post-form");

	// JSON iniziale contenente i dati dei post
	let postsData = {
		posts: [
			{
				id: 1,
				autore: "Mario Rossi",
				titolo: "Il mio primo post",
				testo: "Questo è il contenuto del mio primo post.",
			},
			{
				id: 2,
				autore: "Anna Bianchi",
				titolo: "Viaggio estivo",
				testo: "Racconto delle mie avventure durante le vacanze estive.",
			},
			{
				id: 3,
				autore: "Luigi Verdi",
				titolo: "Pensieri notturni",
				testo: "Riflessioni sulla vita e la filosofia.",
			},
		],
	};

	// Funzione per visualizzare i post nella pagina HTML
	function showPosts(posts) {
		// Pulisce il contenuto del container prima di visualizzare i post aggiornati
		postsContainer.innerHTML = "";
		posts.forEach((post) => {
			// Crea un nuovo elemento div per ogni post
			const postDiv = document.createElement("div");
			postDiv.classList.add("singolo-post"); // Aggiunge una classe CSS al div del post
			postDiv.innerHTML = `
        <h3>${post.titolo}</h3>
        <p><strong>Autore:</strong> ${post.autore}</p>
        <p>${post.testo}</p>
        <button onclick="removePost(${post.id})" class="remove-btn">Rimuovi</button>
        <button onclick="editPost(${post.id})" class="edit-btn">Modifica</button>
        <div id="edit-form-${post.id}" style="display: none;">
          <h4>Modifica Post</h4>
          <form onsubmit="saveEditedPost(event, ${post.id})">
            <label for="editedAutore">Nuovo Autore:</label>
            <input type="text" id="editedAutore" required value="${post.autore}">
            
            <label for="editedTitolo">Nuovo Titolo:</label>
            <input type="text" id="editedTitolo" required value="${post.titolo}">
            
            <label for="editedTesto">Nuovo Testo:</label>
            <textarea id="editedTesto" required>${post.testo}</textarea>
            
            <button type="submit">Salva Modifiche</button>
            <button type="button" onclick="cancelEdit(${post.id})">Annulla</button>
          </form>
        </div>
      `;
			// Aggiunge il div del post al container dei post
			postsContainer.appendChild(postDiv);
		});
	}

	// Funzione per rimuovere un post
	window.removePost = function (postId) {
		// Filtra i post rimuovendo il post con l'ID corrispondente
		postsData.posts = postsData.posts.filter((post) => post.id !== postId);
		// Aggiorna la visualizzazione dei post
		showPosts(postsData.posts);
	};

	// Funzione per aprire il modulo di modifica
	window.editPost = function (postId) {
		const editForm = document.getElementById(`edit-form-${postId}`);
		editForm.style.display = "block";
	};

	// Funzione per chiudere il modulo di modifica
	window.cancelEdit = function (postId) {
		const editForm = document.getElementById(`edit-form-${postId}`);
		editForm.style.display = "none";
	};

	// Funzione per salvare le modifiche
	window.saveEditedPost = function (event, postId) {
		event.preventDefault();

		// Ottenere riferimenti agli elementi del DOM all'interno del modulo di modifica
		const editedAutoreInput = document.getElementById("editedAutore");
		const editedTitoloInput = document.getElementById("editedTitolo");
		const editedTestoInput = document.getElementById("editedTesto");

		// Trova il post nel tuo array di post
		const editedPost = postsData.posts.find((post) => post.id === postId);

		// Aggiorna i valori del post con i nuovi valori inseriti nel modulo di modifica
		editedPost.autore = editedAutoreInput.value;
		editedPost.titolo = editedTitoloInput.value;
		editedPost.testo = editedTestoInput.value;

		// Chiudi il modulo di modifica
		cancelEdit(postId);

		// Aggiorna la visualizzazione dei post
		showPosts(postsData.posts);
	};

	// Carica i post iniziali al caricamento della pagina
	showPosts(postsData.posts);
});

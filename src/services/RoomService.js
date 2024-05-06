export function fetchRooms() {
    // Effectue une requête HTTP GET vers l'URL 'http://localhost:3001/salle/salles'
    return fetch('http://localhost:3001/salle/salles')
        .then(response => {
            // Vérifie si la réponse du serveur est valide (code de statut 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Renvoie les données de la réponse au format JSON
            return response.json();
        })
        .catch(error => {
            // En cas d'erreur lors de la requête ou de la conversion en JSON
            console.error('Error fetching data:', error);
            // Propage l'erreur pour la traiter ultérieurement
            throw error;
        });
}

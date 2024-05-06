// Fonction pour récupérer tous les utilisateurs
export function fetchUsers() {
    return fetch('http://localhost:3001/user/users') // Effectue une requête GET vers l'URL spécifiée
        .then(response => {
            if (!response.ok) { // Vérifie si la réponse du serveur est OK
                throw new Error('Network response was not ok'); // Lance une erreur si la réponse n'est pas OK
            }
            return response.json(); // Renvoie les données de la réponse au format JSON
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Affiche une erreur si la requête échoue
            throw error; // Lance l'erreur pour la gérer plus tard
        });
}

// Fonction pour récupérer un utilisateur par son ID
export function fetchUserById(userId) {
    return fetch(`http://localhost:3001/user/getUser/${userId}`) // Effectue une requête GET vers l'URL spécifiée avec l'ID de l'utilisateur
        .then(response => {
            if (!response.ok) { // Vérifie si la réponse du serveur est OK
                throw new Error('Network response was not ok'); // Lance une erreur si la réponse n'est pas OK
            }
            return response.json(); // Renvoie les données de la réponse au format JSON
        })
        .catch(error => {
            console.error('Error fetching user data:', error); // Affiche une erreur si la requête échoue
            throw error; // Lance l'erreur pour la gérer plus tard
        });
}
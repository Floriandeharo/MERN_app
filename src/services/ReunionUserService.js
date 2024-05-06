import axios from 'axios';

// Importez la bibliothèque axios pour effectuer des requêtes HTTP

// Définissez votre service
const ReunionUserService = {
    // Méthode pour ajouter un utilisateur à une réunion
    addUserReunion: async (idReunion, idUtilisateur) => {
        try {
            // Envoyez une demande POST à votre endpoint pour ajouter un utilisateur à une réunion
            const response = await axios.post('http://localhost:3001/reunion_user/ajouter', {
                id_reunion: idReunion,
                id_utilisateur: idUtilisateur
            });

            // Si la demande est réussie, retournez les données de la réponse
            return response.data;
        } catch (error) {
            // Si une erreur se produit, lancez-la pour la gérer dans le composant appelant
            throw error;
        }
    },

    // Méthode pour récupérer les utilisateurs d'une réunion
    getUsersOfReunion: async (idReunion) => {
        try {
            // Envoyez une demande GET à votre endpoint pour récupérer les utilisateurs d'une réunion
            const response = await axios.get(`http://localhost:3001/reunion_user/users/${idReunion}`);

            // Si la demande est réussie, retournez les données de la réponse
            return response.data;
        } catch (error) {
            // Si une erreur se produit, lancez-la pour la gérer dans le composant appelant
            throw error;
        }
    }
};

// Exportez la méthode addUserReunion pour pouvoir l'utiliser dans d'autres fichiers
export const addUserReunion = ReunionUserService.addUserReunion;
export const getUsersOfReunion = ReunionUserService.getUsersOfReunion;

// Exportez le service complet au cas où vous auriez besoin d'autres méthodes
export default ReunionUserService;

// Importez la bibliothèque axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Définissez votre service
const ReunionService = {
  // Méthode pour créer une nouvelle réunion
  creerReunion: async (motif, duree, idSalle) => {
    try {
      // Envoyez une demande POST à votre endpoint avec les données fournies
      const response = await axios.post('http://localhost:3001/reunion/creer', {
        motif: motif,
        duree: duree,
        id_salle: idSalle // Assurez-vous que le nom du champ correspond à ce que votre API attend
      });

      // Si la demande est réussie, retournez les données de la réponse
      return response.data;
    } catch (error) {
      // Si une erreur se produit, lancez-la pour la gérer dans le composant appelant
      throw error;
    }
  }
};

// Exportez la méthode creerReunion pour pouvoir l'utiliser dans d'autres fichiers
export const creerReunion = ReunionService.creerReunion;

// Exportez le service complet au cas où vous auriez besoin d'autres méthodes
export default ReunionService;

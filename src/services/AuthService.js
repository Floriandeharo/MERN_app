// AuthService.js
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    // Vérifie si le token est présent et valide selon vos critères
    return token !== null && token !== undefined;
  };
  
  export { isAuthenticated };
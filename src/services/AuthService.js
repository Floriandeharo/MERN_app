// AuthService.js
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    // Vérifiez si le token est présent et valide selon vos critères
    // Par exemple, vous pouvez vérifier sa validité en le décodant ou en vérifiant sa date d'expiration
    return token !== null && token !== undefined;
  };
  
  export { isAuthenticated };
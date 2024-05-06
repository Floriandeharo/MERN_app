import React, { useState } from 'react';
import axios from 'axios';

import { Button } from 'primereact/button';
        
const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/login', { email, password });
      const { token, userId } = response.data;

      // Stockez le token JWT dans le stockage local ou dans un autre endroit sûr
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      // Utilisez le token pour effectuer des requêtes authentifiées
      // Par exemple, vous pouvez l'envoyer dans l'en-tête Authorization lors des futures requêtes
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redirigez l'utilisateur vers une autre page ou effectuez toute autre action nécessaire
      console.log('Login successful');
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <input type="email" className='m-1' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <br/>
      <input type="password" className='m-1'  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <br/>
      
      <Button label="Connexion" onClick={handleLogin}/>
    </div>
  );
};

export default LoginComponent;

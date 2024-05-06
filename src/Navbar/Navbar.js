

import { OverlayPanel } from 'primereact/overlaypanel';
import Login from '../Login/Login';
import React, { useRef } from 'react';  

export default function Navbar() {
  const op = useRef(null);
  const userId = localStorage.getItem('userId');
  function handleLogout() {
    // code goes here
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.reload();
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {userId ? (
            <button className="btn btn-primary" onClick={() => handleLogout()}>Déconnexion</button>
          ) : (
            <a className="navbar-brand" onClick={(e) => op.current.toggle(e)}>Connexion</a>
          )}
          <OverlayPanel ref={op}>
            <Login />
          </OverlayPanel>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {userId && (
                <li className="nav-item">
                  <a className="nav-link" href="/perso">
                    Espace Perso
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}




import { OverlayPanel } from 'primereact/overlaypanel';
import Login from '../Login/Login';
import React, { useRef } from 'react';  

export default function Navbar() {
  const op = useRef(null);
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand"  onClick={(e) => op.current.toggle(e)}  >Connexion</a>
            <OverlayPanel ref={op}>

              <Login/>
            </OverlayPanel>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/perso">Espace Perso</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

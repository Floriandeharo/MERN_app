import './Room.css';

import { Toast } from 'primereact/toast';

import { Dialog } from 'primereact/dialog';
import React, { useState,useRef } from 'react';
import { Form } from 'react-router-dom';
import FormReunion from '../FormReunion/FormReunion';
const Room = ({ room }) =>{


const [visible, setVisible] = useState(false);
    const userId = localStorage.getItem('userId');

    return (
        <div>
            {userId ? (
                <div className="card bg-c-blue order-card" onClick={() => setVisible(true)} >
                    <div className="card-block">
                        {/* <h6 className="m-b-20">Etage  </h6> */}
                        <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>{room.nom}</span></h2>
                        <p className="m-b-0">Taille<span className="f-right">{room.capacite} personnes</span></p>
                    </div>
                </div>
            ) : (
                <div className="card bg-c-blue order-card">
                    <div className="card-block">
                        {/* <h6 className="m-b-20">Etage  </h6> */}
                        <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>{room.nom}</span></h2>
                        <p className="m-b-0">Taille<span className="f-right">{room.capacite} personnes</span></p>
                    </div>
                </div>
                
            )}
            <Dialog header="Formulaire Reunion" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <FormReunion  room={room}  />
            </Dialog>

        </div>
    );
};

export default Room;
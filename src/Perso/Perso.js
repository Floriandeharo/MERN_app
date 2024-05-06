import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchUserById } from '../services/UserService'; // Importe la fonction fetchUserById depuis le fichier UserService.js
import { getReunionsofUser } from '../services/ReunionService'; // Importe la fonction getReunionsofUser depuis le fichier ReunionService.js
import { getUsersOfReunion } from '../services/ReunionUserService'; // Importe la fonction getUsersOfReunion depuis le fichier ReunionUserService.js

const Perso = () => {
    const [user, setUser] = useState(null); // Déclare un état user avec la valeur initiale null
    const [reunions, setReunions] = useState(null); // Déclare un état reunions avec la valeur initiale null
    const userId = localStorage.getItem('userId'); // Récupère l'ID de l'utilisateur à partir du localStorage

    useEffect(() => {
        // Utilise useEffect pour effectuer des actions après le rendu initial du composant
        fetchUserById(userId) // Appelle la fonction fetchUserById avec l'ID de l'utilisateur
            .then((response) => {
                setUser(response); // Met à jour l'état user avec la réponse de la requête
            })
            .catch((error) => {
                console.error('Error fetching user:', error); // Affiche une erreur si la requête échoue
            });

        getReunionsofUser(userId) // Appelle la fonction getReunionsofUser avec l'ID de l'utilisateur
            .then((response) => {
                setReunions(response); // Met à jour l'état reunions avec la réponse de la requête

                response.forEach((item) => {
                    getUsersOfReunion(item._id) // Appelle la fonction getUsersOfReunion avec l'ID de la réunion
                        .then((userResponse) => {
                        })
                        .catch((error) => {
                            console.error('Error fetching user:', error); // Affiche une erreur si la requête échoue
                        });
                });
            })
            .catch((error) => {
                console.error('Error fetching user:', error); // Affiche une erreur si la requête échoue
            });
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Espace Perso</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>
                            {user && user.nom} {user && user.prenom}
                            <br />
                            {user && user.email}
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {user && (
                            <DataTable value={reunions} tableStyle={{ minWidth: '50rem' }}>
                                <Column field='_id' header='Code'></Column>
                                <Column field='motif' header='Sujet'></Column>
                                <Column field='duree' header='Durée (en minute)'></Column>
                                <Column
                                    field='dateHeure'
                                    header='date/heure'
                                    body={(rowData) => {
                                        const date = new Date(rowData.dateHeure);
                                        const formattedDate = `${date.getHours()}h${date.getMinutes().toString().padStart(2, '0')} ${date
                                            .getDate()
                                            .toString()
                                            .padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
                                            .getFullYear()
                                            .toString()
                                            .substr(-2)}`;
                                        return formattedDate;
                                    }}
                                ></Column>
                            </DataTable>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perso;
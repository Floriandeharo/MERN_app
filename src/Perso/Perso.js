import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchUserById } from '../services/UserService'; 
import {getReunionsofUser} from '../services/ReunionService';
import {getUsersOfReunion} from '../services/ReunionUserService';
const Perso = () => {
    // Your component logic goes here      
const [user, setUser] = useState(null);
const [reunions, setReunions] = useState(null);
const userId = localStorage.getItem('userId') ;

useEffect(() => {
    fetchUserById(userId)
        .then((response) => {
            setUser(response);
        })
        .catch((error) => {
            console.error('Error fetching user:', error);
        });

        getReunionsofUser(userId)
            .then((response) => {
                setReunions(response);
                
            response.forEach((item) => {
                getUsersOfReunion(item._id)
                    .then((userResponse) => {
                        console.log('User fetched:', userResponse);
                        // Do something with the userResponse
                    })
                    .catch((error) => {
                        console.error('Error fetching user:', error);
                    });
            });
    console.log('Reunion fetched:', response);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
}, []);


 
    return (
        <div>
            {/* Your JSX code goes here */}
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
                           <br/>
                            {user && user.email}
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {user && (
                            <DataTable value={reunions} tableStyle={{ minWidth: '50rem' }}>
                                <Column field="_id" header="Code"></Column>
                                <Column field="motif" header="Sujet"></Column>
                                <Column field="duree" header="Durée (en minute)"></Column>
                                <Column field="dateHeure" header="date/heure" body={(rowData) => {
                                    const date = new Date(rowData.dateHeure);
                                    const formattedDate = `${date.getHours()}h${date.getMinutes().toString().padStart(2, '0')} ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().substr(-2)}`;
                                    return formattedDate;
                                }}></Column>
                            </DataTable>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perso;
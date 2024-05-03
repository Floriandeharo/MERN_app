import React, {useEffect, useState} from 'react';
import Room from '../Room/Room';
import { fetchRooms } from '../services/RoomService';

const Home = () => {
    const [rooms, setRooms] = useState([]); // État pour stocker les utilisateurs récupérés

    useEffect(() => {
        // Chargez les utilisateurs lorsque le composant est monté
        fetchRooms()
          .then(data => {
            // Stockez les utilisateurs récupérés dans l'état
            setRooms(data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
          });
      }, []);
    
    return (
        <div>
            <div className='container'>
                <div className='row text-center'>
                    <h1>Reunion !</h1>
                    <p>.</p>
                </div>
                <div className='row text-center'>
                    <h3>Les différentes salles</h3>
                </div>
                <div className='row'>
                    {rooms.map(room => (
                        <div className='col-4' key={room.id}>
                            <Room room={room} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

import { AutoComplete } from 'primereact/autocomplete';
import React, { useEffect, useState,useRef } from 'react';

import { Toast } from 'primereact/toast';

import { Button } from 'primereact/button';
import './FormReunion.css';
import { Calendar } from 'primereact/calendar';
import { fetchUsers } from '../services/UserService';
import {creerReunion} from '../services/ReunionService';
import {addUserReunion} from '../services/ReunionUserService';
import { InputNumber } from 'primereact/inputnumber';

const FormReunion = ({ room = {} }) => {
  const [users, setUsers] = useState([]); // État pour stocker les utilisateurs récupérés
  const [filteredUsers, setFilteredUsers] = useState([]); // État pour stocker les utilisateurs filtrés par l'autocomplete
  const [selectedUsers, setSelectedUsers] = useState([]); // État pour stocker les utilisateurs sélectionnés
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState(null);
  const [duration, setDuration] = useState(null);
  const toast = useRef(null);
  const [roomState, setRoomState] = useState(room);
  const [reunionId, setReunionId] = useState(null);

  // Utilisez setRoomState pour mettre à jour la variable roomState
  const updateRoom = (newRoom) => {
    setRoomState(newRoom);
  };
  useEffect(() => {
    // Chargez les utilisateurs lorsque le composant est monté
    fetchUsers()
      .then(data => {
        // Stockez les utilisateurs récupérés dans l'état
        setUsers(data);
        // Stockez les utilisateurs récupérés dans l'état des utilisateurs filtrés
        setFilteredUsers(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []);



  // Fonction de filtrage pour l'autocomplete
  const filterUsers = (event) => {
    // Filtrer les utilisateurs en fonction de l'entrée de l'utilisateur
    const filteredResults = users.filter(user =>
      user.email.toLowerCase().includes(event.query.toLowerCase())
    );
    // Mettre à jour l'état des utilisateurs filtrés
    setFilteredUsers(filteredResults);
  };

  // Fonction pour gérer la sélection d'un utilisateur
  const handleUserSelect = (e) => {
    setSelectedUsers(e.value); // Mettez à jour l'état des utilisateurs sélectionnés
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };


  const handleRoomChange = (e) => {
    updateRoom(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      creerReunion(subject, duration,  room._id, date)
      .then(data => {
        // Stockez les utilisateurs récupérés dans l'état
        console.log('Reunion created:', data);
        selectedUsers.forEach(user => {
          addUserReunion(user._id, data.id_reunion);
        });
        
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });

      toast.current.show({ severity: 'success', summary: '', detail: 'Reunion crée' });

      console.log('Form submitted',e);
      console.log('Form data:', selectedUsers);
      console.log('Form data:', {
        subject: subject,
        selectedUsers: selectedUsers,
        date: date,
        room: room,
        duration: duration
      });
      // Add your form submission logic here
    };

    return (
      <div>
        {/* Add your component UI here */}
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Sujet de la reunion</label>
              <input type="text" className="form-control" onChange={handleSubjectChange} value={subject} required id="exampleFormControlInput1" placeholder="Sujet de la reunion" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Personnes Conviées</label>
              <br />
              <AutoComplete
                field="email" // Champ à utiliser comme valeur d'option
                multiple // Permettre la sélection multiple
                style={{ width: "100%" }}
                value={selectedUsers} // Utilisateurs sélectionnés
                // Rend le champ obligatoire
                suggestions={filteredUsers} // Suggestions pour l'autocomplete
                completeMethod={filterUsers} // Méthode de filtrage des suggestions
                onChange={handleUserSelect} // Gestion de la sélection d'un utilisateur
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Date et heure de la reunion</label>
              <br />
              <Calendar
                showTime
                hourFormat="24"
                value={date}
                onChange={handleDateChange}
                required
                timeOnly={false} // Ajoutez cette ligne
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Durée de la reunion (en minute)</label>
              <br />
            <InputNumber value={duration} onValueChange={handleDurationChange}
                style={{ width: "100%" }}  showButtons min={0} max={120} />

              </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Salle de la reunion</label>
              <select className="form-control" value={room._id} onChange={handleRoomChange} required id="exampleFormControlSelect1">
                <option value={room._id}>{room.nom}</option>
              </select>
            </div>

            <Toast ref={toast} />
            <div className="form-group text-end">

            <button type="submit" className="btn mt-3 btn-primary" >Soumettre</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default FormReunion;
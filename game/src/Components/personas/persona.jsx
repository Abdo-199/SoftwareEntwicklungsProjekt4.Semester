import React, { useState } from 'react';
import PersonaForm from './personasForm';
import { AiOutlineCloseSquare,AiOutlineEdit } from 'react-icons/ai';
import "./personasStyles.css"

const Persona = ({ personas, completePersona, removePersona, updatePersona}) => {


  const [edit, setEdit] = useState({
    id: null,
    valueName:'',
    valueGender:'',
    valueBio:''
  });
  

  const submitUpdate = value => {
    updatePersona(edit.id, value);
    setEdit({
      id: null,
      nameValue: '',
      genderValue:'',
      bioValue:''
    });
  };

  if (edit.id) {
    return <PersonaForm edit={edit} onSubmit={submitUpdate} />;
  }

  return personas.map((persona, index) => (
    <div
      className={persona.isComplete ? 'persona-row complete' : 'persona-row'}
      key={index}
    >
      <div key={persona.id} onClick={() => completePersona(persona.id)}>
        <div className='outputsContainer'>
        <h2 className='diss'>name:</h2>
        <h2 className='diss value'> {persona.name}</h2>
        </div>
        <div className='outputsContainer'>
        <h2 className='diss'>gender:</h2>
        <h2 className='diss value'> {persona.gender} </h2>
        </div>
        <div className='outputsContainer'>
        <h2 className='diss'>bio:</h2>
        <h2 className='diss value'> {persona.bio}</h2>
        </div>
      </div>
      <div className='icons'>
        <AiOutlineCloseSquare
          onClick={() => removePersona(persona.id)}
          className='delete-icon'
        />
        <AiOutlineEdit
          onClick={() => setEdit(
            { id: persona.id, valueName:persona.name, valueBio:persona.bio,valueGender:persona.gender}
            )}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Persona;
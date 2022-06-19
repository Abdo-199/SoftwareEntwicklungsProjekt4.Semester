import React, { useState } from 'react';
import PersonaForm from './personasForm';
import Persona from './persona';
import "./personasStyles.css"
function PersonaList() {
  const [personas, setPersonas] = useState([]);
  //when click on submit in personasForm this method is being called=> updates the list personas throug the hook setPersonas and pass it to the function persona
  const addPersona = persona => {
    if (!persona.name || /^\s*$/.test(persona.name)) {
      return;
    }
    console.log(persona);

    const newPersonas = [persona, ...personas];

    setPersonas(newPersonas);
    console.log(...personas);
  };
  //called with{AiOutlineEdit.onClick} in the function persona througt the id of persona can be identefied

  const updatePersona = (personaId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.name)) {
      return;
    }

    setPersonas(prev => prev.map(item => (item.id === personaId ? newValue : item)));
  };
  //called with{AiOutlineCloseSquare.onClick} in the function persona througt the id of persona can be identefied
  const removePersona = id => {
    const removedArr = [...personas].filter(persona => persona.id !== id);

    setPersonas(removedArr);
  };

  const completePersona = id => {
    let updatedPersonas = personas.map(persona => {
      if (persona.id === id) {
        persona.isComplete = !persona.isComplete;
      }
      return persona;
    });
    setPersonas(updatedPersonas);
  };

  return (
    <>
      <PersonaForm onSubmit={addPersona} />
      <Persona
        personas={personas}
        completePersona={completePersona}
        removePersona={removePersona}
        updatePersona={updatePersona}
      />
    </>
  );
}

export default PersonaList;
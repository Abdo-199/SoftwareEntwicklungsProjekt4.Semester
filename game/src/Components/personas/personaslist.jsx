import React, { useState } from 'react';
import PersonaForm from './personasForm';
import Persona from './persona';
import "./personasStyles.css"
function PersonaList() {
  const [personas, setPersonas] = useState([]);

  const addPersona = todo => {
    if (!todo.name || /^\s*$/.test(todo.name)) {
      return;
    }
    console.log(todo);

    const newPersonas = [todo, ...personas];

    setPersonas(newPersonas);
    console.log(...personas);
  };

  const updatePersona = (personaId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.name)) {
      return;
    }

    setPersonas(prev => prev.map(item => (item.id === personaId ? newValue : item)));
  };

  const removePersona = id => {
    const removedArr = [...personas].filter(todo => todo.id !== id);

    setPersonas(removedArr);
  };

  const completePersona = id => {
    let updatedPersonas = personas.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setPersonas(updatedPersonas);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
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
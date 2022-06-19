import React, { useState, useEffect, useRef } from 'react';
import "./personasStyles.css"

function PersonaForm(props) {
  const [inputName, setInputName] = useState(props.edit ? props.edit.value : '');
  const [inputGender, setInputGender] = useState(props.edit ? props.edit.value : '');
  const [inputBio, setInputBio] = useState(props.edit ? props.edit.value : '');
  //const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChangeName = e => {
    setInputName(e.target.value);
  };
  const handleChangeGender = e => {
    setInputGender(e.target.value);
  };
  const handleChangeBio = e => {
    setInputBio(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: inputName,
      gender:inputGender,
      bio:inputBio
    });
    setInputName('');
    setInputGender('');
    setInputBio('');

  };

  return (
    <form onSubmit={handleSubmit} className='persona-form'>
      {props.edit ? (
        <div className='inputContainer'>
          <input
            placeholder='Update your item'
            value={inputName}
            onChange={handleChangeName}
            name='name'
           
            className='persona-input edit'
          />
           <input
            placeholder='Update your item'
            value={inputGender}
            onChange={handleChangeGender}
            name='gender'
            
            className='persona-input edit'
          />
          
          
           <input
            placeholder='Update your item'
            value={inputBio}
            onChange={handleChangeBio}
            name='bio'
            
            className='persona-input edit'
          />
          
          <button onClick={handleSubmit} className='persona-button edit'>
            Update
          </button>
        </div>
      ) : (
        <div className='inputContainer'>
          <input
            placeholder='Add a name'
            value={inputName}
            onChange={handleChangeName}
            name='name'
           
            className='persona-input'
          />
           <input
            placeholder='Add a gender'
            value={inputGender}
            onChange={handleChangeGender}
            name='gender'
         
            className='persona-input'
          />
         

           <input
            placeholder='Add a Bio'
            value={inputBio}
            onChange={handleChangeBio}
            name='bio'
          
            className='persona-input bio'
          />
          

          <button onClick={handleSubmit} className='persona-button'>
            Add persona
          </button>
        </div>
      )}
    </form>
  );
}

export default PersonaForm;
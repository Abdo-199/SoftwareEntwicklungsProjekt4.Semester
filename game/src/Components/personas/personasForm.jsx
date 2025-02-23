import React, { useState} from 'react';
import "./personasStyles.css"

function PersonaForm(props) {
  //Hook to set the value of the name
  const [inputName, setInputName] = useState(props.edit ? props.edit.value : '');
  //Hook to set the value of the Gender
  const [inputGender, setInputGender] = useState(props.edit ? props.edit.value : '');
  //Hook to set the value of the Bio
  const [inputBio, setInputBio] = useState(props.edit ? props.edit.value : '');
  
  const handleChangeName = e => {
    setInputName(e.target.value);
  };
  const handleChangeGender = e => {
    setInputGender(e.target.value);
  };
  const handleChangeBio = e => {
    setInputBio(e.target.value);
  };
  // event handler handles the click on the submit button 
  //sets the values of persona{throug the call from persona list}
  //id is randomly generated
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
  //has two cases: edit / add {onClick on the edit icon in persona the Prop edit will be passed to the Personas form=> and the edit fields will be displayed}
  
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
import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserinput] = useState('');

    const handleChange = (e) => {
      setUserinput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(userInput);
      setUserinput("");
    }

    return (
      <form onSubmit = {handleSubmit}>
        <input value = {userInput} type = "text" onChange={handleChange} placeholder="Enter task..."/>
        <button>Submit</button>
      </form>
    );
};


export default ToDoForm;

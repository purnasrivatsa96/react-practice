import logo from './logo.svg';
import './App.css';
import Header from './Header';
import data from "./data.json";
import ToDoList from "./ToDoList";

import React, {useState} from 'react';

function App() {

  const [toDoList, setToDoList ] = useState(data);


  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
    </div>
  );

}



export default App;

import './App.css';
import React from 'react';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return <ul>{ tarefas.map((value) => Task(value)) }</ul>;
}

export default App;
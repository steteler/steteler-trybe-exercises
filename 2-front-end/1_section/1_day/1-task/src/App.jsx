import React from 'react';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (tarefa) => {
  return (
    <li>{tarefa}</li>
  );
}

function App() {
  return <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>;
}

export default App;
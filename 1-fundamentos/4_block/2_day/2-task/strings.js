const tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
const indexTasks = tasksList.indexOf('Reunião');

tasksList.pop();
console.log(tasksList);

tasksList.shift();
console.log(tasksList);
console.log(indexTasks);
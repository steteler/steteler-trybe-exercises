function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();
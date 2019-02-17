let addBtn = document.getElementById('addTaskBtn');
let taskInput = document.getElementById('taskInput');
let inCompletedTasks = document.getElementById('inCompletedTasks');
let completedTasks = document.getElementById('completedTasks');

addBtn.addEventListener('click', () => {

    let taskDiv = document.createElement('div');

    tDiv = taskDiv;
    
    taskDiv.classList.add('tasks');
    
    taskDiv.innerHTML = "<input class='taskBtn' type='checkbox'>" + taskInput.value;
    
    if(taskInput.value.trim() != ''){
        
        inCompletedTasks.appendChild(taskDiv);
    }

    
    taskInput.value = '';

})

var deleteTodo = function(){
  
    var item = this.parentNode;
    var list = listItem.parentNode;
    
    list.removeChild(item);
    
  };

let taskBtn = document.getElementsByClassName('taskBtn');

console.log(taskBtn)

let cmpTaskDiv = document.createElement('div');


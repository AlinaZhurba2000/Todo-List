"use strict"

let enterTask = document.querySelector('.enterTask');
let addTask = document.querySelector('.addTask');
let card = document.querySelector('.card');
let chousePriority = document.querySelector('.chouseSort');

let Tasks = [];

let sortByName = (Tasks) => {
    return Tasks.sort((a,b)=>a.value>b.value ? 1: -1);
}

function createTaskElement(name,priority){
    this.name = name;
    this.priority = priority;
    this.status = false;
}

function pressAdd()
{
    //добавляем задачу в массив
   // let task = new createTaskElement(enterTask.value,chousePriority.value);
    
   Tasks.push(enterTask.value);
   
   let mapped = Tasks.map(
        (task, i) => ({
            index: i,
            name: task.toLowerCase(),
        })
    );

    let sortedTasks = sortByName(mapped).map(task=>Tasks[task.index]);

    todolist.innerHTML = sortedTasks.map(task => '<li>' + task + "</li>").join('')
    enterTask.value = '';


}



   /* //считаем количество задач
    let getCountofTask = document.querySelector('.count');
    getCountofTask.value = Tasks.length;
    getCountofTask.classList.add('count');
    

    //создаем карточку для задачи
    let divTask = document.createElement('div');
    divTask.classList.add('TODOitem');
    card.appendChild(divTask);

    //текст задачи
    let poleTask = document.createElement('input');
    poleTask.classList.add('item');
    poleTask.type = 'text';
    poleTask.value = 'priority:' + task.priority +'  ' + task.name ;
    poleTask.disabled = true;
    divTask.appendChild(poleTask);

    //кнопка удаления
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('itemDelete');
    deleteButton.innerHTML='Delete';
    deleteButton.addEventListener('click',()=>deleteTask(divTask, Tasks));
    divTask.appendChild(deleteButton);

    //удаление элемента
function deleteTask(divTask, Tasks)
{
    divTask.parentNode.removeChild(divTask);
    //добавить сюда удаление из массива
    alert(Tasks.length);
    //Tasks.splice(task);
    
   
    
}

    enterTask.value="";
}

*/



"use strict"

let enterTask = document.querySelector('.enterTask');
let addTask = document.querySelector('.addTask');
let card = document.querySelector('.card');
let chousePriority = document.querySelector('.chouseSort');

let Tasks = [];

function createTaskElement(name,priority){
    this.name = name;
    this.priority = priority;
    this.status = false;
}

addTask.onclick = () => {
     
    //добавляем задачу в массив
    let task = new createTaskElement(enterTask.value,chousePriority.value);
    
    //создаем карточку для задачи
     let divTask = document.createElement('div');
     divTask.classList.add('TODOitem');
     card.appendChild(divTask);

     //текст задачи
    let poleTask = document.createElement('input');
    poleTask.classList.add('item');
    poleTask.type ='text';
    poleTask.value = 'priority:' + task.priority +'  ' + task.name ;
    poleTask.name = task.priority;
    poleTask.disabled = true;
    //poleTask.addEventListener('click',()=>editTask(poleTask));
    divTask.appendChild(poleTask);

    //кнопка удаления
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('itemDelete');
    deleteButton.innerHTML='Delete';
    deleteButton.addEventListener('click',()=>deleteTask(divTask, Tasks));
    divTask.appendChild(deleteButton);

    let editButton = document.createElement('button');
    editButton.classList.add('itemCancel');
    editButton.innerHTML='Edit';
    editButton.addEventListener('click',()=>editTask(poleTask));
    divTask.appendChild(editButton);

    //считаем количество задач
    let getCountofTask = document.querySelector('.count');
    getCountofTask.value = card.children.length-1;
    getCountofTask.classList.add('count');

    enterTask.value="";
};
    
//удаление элемента
function deleteTask(divTask)
{
    divTask.parentNode.removeChild(divTask);

    //считаем количество задач
    let getCountofTask = document.querySelector('.count');
    getCountofTask.value = card.children.length-1;
    getCountofTask.classList.add('count');
}

//почему не работает? хммм...
function editTask(poleTask)
{
    poleTask.disabled = !poleTask.disabled;
}

//тоже не работает...
let sortHigh = document.querySelector("#High");
sortHigh.addEventListener('click',()=>{
    let sortedDivByHigh = Array.from(card.children)
    .sort((divA)=>divA.priority=='High');

card.append(...sortedDivByHigh);
});

let sortMedium = document.querySelector("#Medium");
sortMedium.addEventListener('click',()=>{
    let sortedDivByMedium = Array.from(card.children)
    .sort((divA,divB)=>divA.name>divB.name ? 1 :-1);

card.append(...sortedDivByMedium);
});

let sortLow = document.querySelector("#Low");
sortLow.addEventListener('click',()=>{
    let sortedDivByLow = Array.from(card.children)
    .sort((divA,divB)=>divA.name>divB.name ? 1 :-1);

card.append(...sortedDivByLow);
})
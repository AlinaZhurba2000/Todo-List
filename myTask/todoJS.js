"use strict"

let enterTask = document.querySelector('.enterTask');
let addTask = document.querySelector('.addTask');
let card = document.querySelector('.card');
let chousePriority = document.querySelector('.chouseSort');

let Tasks = [];

function createTaskElement(name,priority,status){
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
     divTask.innerHTML='Priority: ' + task.priority;
     divTask.id = task.priority;
     card.appendChild(divTask);

     //текст задачи
    let poleTask = document.createElement('input');
    poleTask.classList.add('item');
    poleTask.type ='text';
    poleTask.value = task.name ;
    poleTask.name = task.priority;
    poleTask.disabled = true;
    
    divTask.appendChild(poleTask);

    //кнопка удаления
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('itemDelete');
    deleteButton.innerHTML='Delete';
    deleteButton.addEventListener('click',()=>deleteTask(divTask, Tasks));
    divTask.appendChild(deleteButton);

    //пока не знаю, как сделать редактируемым по нажатию (почему-то не выходит)
    let editButton = document.createElement('button');
    editButton.classList.add('itemCancel');
    editButton.innerHTML='Edit';
    editButton.addEventListener('click',()=>editTask(poleTask, task));
    divTask.appendChild(editButton);

    //кнопка выполнения
    let completeButton = document.createElement('button');
    completeButton.classList.add('itemDone');
    completeButton.innerHTML='Done';
    completeButton.addEventListener('click',()=>doneTask(divTask,poleTask,task));
    divTask.appendChild(completeButton);

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

function doneTask(divTask,poleTask, task)
{
    task.status = !task.status;
    if(task.status){
        poleTask.className='item-done';
    }
    else poleTask.className='item-cancel';
}

//тоже не работает...
let sortHigh = document.querySelector("#High");
sortHigh.addEventListener('click',()=>{
    let sortedDivByHigh = Array.from(card.children)
    .filter((divA)=>divA.id=='High');

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

//1. исправить сортировку
//2. добавить дату
//3. настроить фильтр
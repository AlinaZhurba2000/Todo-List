"use strict"

let enterTask = document.querySelector('.enterTask');
let addTask = document.querySelector('.addTask');
let card = document.querySelector('.card');
let chousePriority = document.querySelector('.chouseSort');



class task{
    constructor(name,priority){
        this.createTask(name,priority);
    }

    createTask(name,priority){
        let itemBox = document.createElement('div');
        itemBox.classList.add('TODOitem');

        let prior = document.createElement('label');
        prior.for = name;
        prior.classList.add('label');

        let input = document.createElement('input');
    	input.type = "text";
        input.disabled = true;
    	input.value = name;
        input.classList.add('item');
        
    	let cancelTask = document.createElement('button');
    	cancelTask.classList.add('itemCancel');
    	cancelTask.innerHTML = "Edit";
        cancelTask.addEventListener('click', () => this.edit(input));
        
        //let doneTask = document.createElement('button');
    	//doneTask.classList.add('itemCancel');
    	//doneTask.innerHTML = "Cancel";
    	//doneTask.addEventListener('click', () => this.edit(input));

    	let deleteTask = document.createElement('button');
    	deleteTask.classList.add('itemDone');
    	deleteTask.innerHTML = "Delete";
    	deleteTask.addEventListener('click', () => this.remove(itemBox));

    	card.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(cancelTask);
        itemBox.appendChild(deleteTask);

    }
    edit(input){
           input.disabled = !input.disabled;
    }

    remove(itemBox){
        itemBox.parentNode.removeChild(itemBox);
     }
}


addTask.addEventListener('click',()=>{
    new task(enterTask.value, chousePriority.value);
    enterTask.value="";
});



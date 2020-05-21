"use strict"

var enterTask = document.querySelector('.enterTask');
var addTask = document.querySelector('.addTask');
var card = document.querySelector('.card');

class task{
    constructor(name){
        this.createTask(name);
    }

    createTask(name){
        let itemBox = document.createElement('div');
        itemBox.classList.add('TODOitem');

        let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item');

    	var edit = document.createElement('button');
    	edit.classList.add('itemCancel');
    	edit.innerHTML = "Can";
    	edit.addEventListener('click', () => this.edit(input));

    	var remove = document.createElement('button');
    	remove.classList.add('itemDone');
    	remove.innerHTML = "Do";
    	remove.addEventListener('click', () => this.remove(itemBox));

    	card.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
    }
    edit(input){
      
           input.disabled = !input.disabled;

    	
    }

    remove(itemBox){
        itemBox.parentNode.removeChild(itemBox);
     }
}


addTask.addEventListener('click',()=>new task(enterTask.value));



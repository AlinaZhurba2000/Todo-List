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

function pressAdd()
{
    let task = new createTaskElement(enterTask.value,chousePriority.value);
    Tasks.push(task);
    alert(task.name);
}
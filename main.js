let $todoInput; // input służący do wprowadzania zadań
let $addBtn; // button służący do zatwierdzania wprowadzonych zadań w todoInput 
let $todoList; // div todoList przechowujący alertInfo i ulList
let $alertInfo; // paragraf pokazujący informacje o liscie

let $tools; // div majacy listę zadań i tools
let $complete; // przycisk służący do potwierdzania taska
let $edit; // przycisk służący do edytowania taska
let $delete; // przycisk służący do usuwania taska

let $popup; // 

// dunkcja main ładująca funkcje elementów i nasłuchiwaczy eventów
const main = () => {
    prepareDOMElement();
    prepareDOMEvent();
};
// funkcja ładująca zmienne elementów DOM
const prepareDOMElement = () => {
    $todoInput = document.querySelector('.todoInput');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
    $alertInfo = document.querySelector('.alertInfo');
};
// funkcja ładująca nasłuchiwaczy eventów 
const prepareDOMEvent = () => {
    $addBtn.addEventListener('click', addTask);
};

const addTask = () => {
    if ($todoInput.value !== '' ) {
        liElement = document.createElement('li');
        divTools = document.createElement('div');
        completeBtn = document.createElement('button');
        editBtn = document.createElement('button');
        deleteBtn = document.createElement('button');
        $ulList.appendChild(liElement).innerText = $todoInput.value;
        liElement.appendChild(divTools).classList.add('tools');
        divTools.appendChild(completeBtn).classList.add('complete');
        divTools.appendChild(editBtn).classList.add('edit');
        divTools.appendChild(deleteBtn).classList.add('delete');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        editBtn.innerText = 'EDIT';
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        $todoInput.value = '';
        $alertInfo.innerText = 'Aktualne zadania:'
    }else{
        $alertInfo.innerText = 'Musisz wpisać zadanie..'
    }
};




// listenear ładujący funkcję main po załadowaniu wszystkich elementów DOM 
document.addEventListener('DOMContentLoaded', main);
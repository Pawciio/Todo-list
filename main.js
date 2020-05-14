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
    $todoInput.addEventListener('keyup', checkEnter);
};
// funkcja dodająca zadania
const addTask = () => {
    if ($todoInput.value !== '' ) {
        liElement = document.createElement('li');
        $tools = document.createElement('div');
        $complete = document.createElement('button');
        $edit = document.createElement('button');
        $delete = document.createElement('button');
        $ulList.appendChild(liElement).innerText = $todoInput.value;
        liElement.appendChild($tools).classList.add('tools');
        createTools();
        $todoInput.value = '';
        $alertInfo.innerText = 'Aktualne zadania:';
    }else{
        $alertInfo.innerText = 'Musisz wpisać zadanie..';
    }
};
//funkcja tworzy elementy tools i dodaje odpowiednie klasy
const createTools = () => {
    $tools.appendChild($complete).classList.add('complete');
    $tools.appendChild($edit).classList.add('edit');
    $tools.appendChild($delete).classList.add('delete');
    $complete.innerHTML = '<i class="fas fa-check"></i>';
    $edit.innerText = 'EDIT';
    $delete.innerHTML = '<i class="fas fa-times"></i>';
};
// funkcja sprawdzająca czy naciśnięto enter i odpalająca funkcję dodającą zadanie
const checkEnter = () => {
    if (event.keyCode === 13) {
        addTask();
    };
};
//



// listenear ładujący funkcję main po załadowaniu wszystkich elementów DOM 
document.addEventListener('DOMContentLoaded', main);
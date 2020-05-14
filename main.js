let $todoInput; // input służący do wprowadzania zadań
let $addBtn; // button służący do zatwierdzania wprowadzonych zadań w todoInput 
let $ulList; // div todoList przechowujący alertInfo i ulList
let $alertInfo; // paragraf pokazujący informacje o liscie
let $newTask // przechowuje stworzone li

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
        $newTask = document.createElement('li');
        $ulList.appendChild($newTask).innerText = $todoInput.value;
        $todoInput.value = '';
        $alertInfo.innerText = 'Aktualne zadania:';
        createTools();
    }else{
        $alertInfo.innerText = 'Musisz wpisać zadanie..';
    }
};
//funkcja tworzy elementy tools i dodaje odpowiednie klasy
const createTools = () => {
    const tools = document.createElement('div');
    tools.classList.add('tools');
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    tools.appendChild(completeBtn).innerHTML = '<i class="fas fa-check"></i>';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    tools.appendChild(editBtn).innerText = 'EDIT';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    tools.appendChild(deleteBtn).innerHTML = '<i class="fas fa-times"></i>';
    $newTask.appendChild(tools);
};
// funkcja sprawdzająca czy naciśnięto enter i odpalająca funkcję dodającą zadanie
const checkEnter = () => {
    if (event.keyCode === 13) {
        addTask();
    };
};


// listenear ładujący funkcję main po załadowaniu wszystkich elementów DOM 
document.addEventListener('DOMContentLoaded', main);
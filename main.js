let $todoInput; // input służący do wprowadzania zadań
let $addBtn; // button służący do zatwierdzania wprowadzonych zadań w todoInput 
let $ulList; // div todoList przechowujący alertInfo i ulList
let $alertInfo; // paragraf pokazujący informacje o liscie
let $newTask; // przechowuje stworzone li
let $popup; // kontener div związany z edycją zadań
let $popupInfo; // informacje dotyczące edytowanego tekstu zadania
let $popupInput; // input pozwalający zmienić zawartość edytowanego zadania
let $popupAccept; // button zatwierdzający zmiany edytowanego zadania
let $popupCancel; // button anulujący zmiany dotyczące edytowanego zadania

let $idNumber = 0;
let $globalIdEditLi;

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
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $popupAccept = document.querySelector('.accept');
    $popupCancel = document.querySelector('.cancel');
};
// funkcja ładująca nasłuchiwaczy eventów 
const prepareDOMEvent = () => {
    $addBtn.addEventListener('click', addTask);
    $todoInput.addEventListener('keyup', checkEnter);
    $ulList.addEventListener('click', clickedButtonTools);
    $popupCancel.addEventListener('click', editCancel);
    $popupAccept.addEventListener('click', editAccept);
    $popupInput.addEventListener('keyup', checkEnterEdit);
};
// funkcja dodająca zadania
const addTask = () => {
    if ($todoInput.value !== '' ) {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        $ulList.appendChild($newTask).innerText =  $todoInput.value;
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
// Funkcja sprawdzająca który button z tools został kliknięty i uruchamia odpowieni kod
const clickedButtonTools = (e) => {
    if (e.target.closest('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    }else if (e.target.closest('.edit')) {
        $popup.style.display = 'flex';
        $newTask = e.target.closest('li');
    }else if (e.target.closest('.delete')) {
        e.target.closest('li').remove();
    }
};
// Funkcja anlująca okno popup 
const editCancel = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = '';
};
// Funkcja zatwierdzająca zmiany edytowanego zadania
const editAccept = () => {
    if ($popupInput.value !== '') {
        $newTask.innerText = $popupInput.value;
        $popup.style.display = 'none';
        $popupInput.value = '';
        createTools();
    }else{
        $popupInfo.innerText = 'Musisz podać nową treść zadania..';
    }
};

const checkEnterEdit = () => {
    if (event.keyCode === 13) {
        editAccept();
    };
};

const chcekStyle = () => {
    
};

// listenear ładujący funkcję main po załadowaniu wszystkich elementów DOM 
document.addEventListener('DOMContentLoaded', main);
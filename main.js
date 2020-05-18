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

let $spanInputText;
let $spanPriority;
let $buttonPriority;

//Priority Select
let select;
let $selectPriorityCircle; // circle priorytetu obok okna select


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
    //Priority
    $selectPriorityCircle = document.querySelector('.selectPriorityCircle');
    $spanCircleSelect = document.querySelector('.spanCircleSelect');
    select = document.querySelector('#select');
};
// funkcja ładująca nasłuchiwaczy eventów 
const prepareDOMEvent = () => {
    $addBtn.addEventListener('click', addTask);
    $todoInput.addEventListener('keyup', checkEnter);
    $ulList.addEventListener('click', clickedButtonTools);
    $popupCancel.addEventListener('click', editCancel);
    $popupAccept.addEventListener('click', editAccept);
    $popupInput.addEventListener('keyup', checkEnterEdit);

    select.addEventListener('click', changePriorityColorInSelect);
};
// funkcja dodająca zadania
const addTask = () => {
    if ($todoInput.value !== '' ) {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        createPriorityCircle();
        $spanInputText.innerText = $todoInput.value;
        $todoInput.value = '';
        $alertInfo.innerText = 'Aktualne zadania:';
        createTools();
    }else{
        $alertInfo.innerText = 'Musisz wpisać zadanie..';
    }
};
// Funkcja tworząca strukture span btnPriority 
const createPriorityCircle = () => {
    $spanInputText = document.createElement('span');
    $spanPriority = document.createElement('span');
    $buttonPriority = document.createElement('button');
    $ulList.appendChild($newTask).appendChild($spanPriority).appendChild($buttonPriority);
    $spanPriority.appendChild($spanInputText);
    $buttonPriority.innerHTML = '<i class="fas fa-circle"></i>';
    $buttonPriority.classList.add('priority');
    if (select.options[1].selected) {
        $buttonPriority.classList.add('priorityHight');
    }else if (select.options[2].selected) {
        $buttonPriority.classList.add('priorityMidly');
    }else if (select.options[3].selected) {
        $buttonPriority.classList.add('priorityLower');
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
        $newTask.classList.value = '';
        $popup.style.display = 'none';
        $popupInput.value = '';
        createTools();
    }else{
        $popupInfo.innerText = 'Musisz podać nową treść zadania..';
    }
};
// funkcja sprawdzająca czy naciśnięto enter i odpalająca funkcję edytujące zadanie
const checkEnterEdit = () => {
    if (event.keyCode === 13) {
        editAccept();
    };
};

function changePriorityColorInSelect () {
    if (select.options[1].selected) {
        $selectPriorityCircle.classList.add('priorityHight');
        $selectPriorityCircle.classList.remove('priorityMidly');
        $selectPriorityCircle.classList.remove('priorityLower');
    }else if (select.options[2].selected) {
        $selectPriorityCircle.classList.add('priorityMidly');
        $selectPriorityCircle.classList.remove('priorityHight');
        $selectPriorityCircle.classList.remove('priorityLower');
    }else if (select.options[3]) {
        $selectPriorityCircle.classList.add('priorityLower');
        $selectPriorityCircle.classList.remove('priorityMidly');
        $selectPriorityCircle.classList.remove('priorityHight');
    }
    // else{
    //     select.value = select.options[0].innerText;
    //     $selectPriorityCircle.style.color = 'black';
    //     $selectPriorityCircle.classList.remove('priorityLower');
    //     $selectPriorityCircle.classList.remove('priorityMidly');
    //     $selectPriorityCircle.classList.remove('priorityHight');
    // }
};


// listenear ładujący funkcję main po załadowaniu wszystkich elementów DOM 
document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', changePriorityColorInSelect);
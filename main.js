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
    $todoList = document.querySelector('.todoList');
    $alertInfo = document.querySelector('.alertInfo');
};
// funkcja ładująca nasłuchiwaczy eventów 
const prepareDOMEvent = () => {

};

// listenear ładujący funkcję main po załadowaniu wszystkich elementów DOM 
document.addEventListener('DOMContentLoaded', main);
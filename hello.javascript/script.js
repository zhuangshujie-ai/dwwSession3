console.log("hello world");



let button = document.querySelector("#button-name");
let  inputName = document.querySelector("#input-name");

let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");
let target = document.querySelector("#target");

console.log(button);

button.addEventListener("click", function() {
    console.log(inputName.value);
    target.innerHTML = inputName.value;
})

buttonColor.addEventListener("click", function() {
    target.style.color = inputColor.value;
})


/*

    ####################################################################################


                                         TO DO LIST


    ####################################################################################

*/

let buttonToDo = document.querySelector("#toDoButton");
let inputToDo = document.querySelector("#toDoInput");
let toDo = document.querySelector("#toDo");

buttonToDo.addEventListener("click", function() {
    let currentToDo = inputToDo.value;
    let newLiElenent = `<li>${currentToDo}</li>`;

    toDo.innerHTML += newLiElenent;
})
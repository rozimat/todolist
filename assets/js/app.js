'use strict';
const todolistFormEl = document.querySelector("#adder-form");
const todolistAdderInputEl = document.querySelector("#adder-input");
const todolistItemContainerEl = document.querySelector("#todolistitem-container");
const clearIcon = document.querySelector(".input__wrapper > i");
const deleteAllEl = document.querySelector("#delete-all");

todolistFormEl.addEventListener("submit", (e) =>{
  e.preventDefault();
  if (todolistAdderInputEl.value.replace(/ /g, "").length>=3){
    const todoItem = document.createElement("div");
    todolistItemContainerEl.prepend(todoItem);
    todolistAdderInputEl.value = '';
  }
})
clearIcon.addEventListener("click", ()=>{
  todolistAdderInputEl.value = '';
  todolistAdderInputEl.focus();
})
deleteAllEl.addEventListener("click", ()=>{
  const isUserAgree = confirm ("Are you sure to delete all?");
  console.log(isUserAgree);
  if (isUserAgree){
    todolistItemContainerEl.innerHTML = '';
  }
})

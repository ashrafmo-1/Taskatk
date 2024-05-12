"use strict";

// import swal from "sweetalert";

// handle btn add new task controller
var addTask = document.querySelector(".add_task");
addTask === null || addTask === void 0 || addTask.addEventListener("click", function () {
  var taskController = document.createElement("div");
  taskController.className = "task-controller";
  var title = document.createElement("h2");
  title.className = "task_controller_title";
  title.innerHTML = "Add New Task";
  taskController.appendChild(title);
  var form = document.createElement("form");
  form.className = "form_controller";
  form.innerHTML = "\n    <label class=\"tasktitle\">title</label>\n    <input class=\"input_title\" type=\"text\" placeholder=\"e.g. task coffee break\">\n    <label class=\"task_discription\">discription</label>\n    <textarea class=\"input_discription\" type=\"text\" placeholder=\"e.g, its always good to take a break. This 15 minute break Willrecharge the batteries a little.\" style=\"resize: none;\"></textarea>\n    <button class=\"create_task\" type=\"submit\">create task</button>\n  ";
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
  overlay.style.zIndex = "999";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function (event) {
    if (event.target !== taskController) {
      taskController.remove();
      overlay.remove();
    }
  });
  var closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.innerHTML = "X";
  closeButton.addEventListener("click", function () {
    taskController.remove();
    overlay.remove();
  });
  taskController.appendChild(closeButton);
  taskController.appendChild(form);
  document.body.appendChild(taskController);
  createNewToDo();
});
function createNewToDo() {
  var _document$querySelect;
  var to_do_list = document.querySelector(".to_do_box .to_do_list");
  (_document$querySelect = document.querySelector(".create_task")) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener("click", function (e) {
    e.preventDefault();
    var title = document.querySelector(".input_title").value;
    var discription = document.querySelector(".input_discription").value;
    if (title && discription) {
      var _document$querySelect2, _document$querySelect3;
      var newToDo = document.createElement("li");
      newToDo.className = "to_do";
      newToDo.innerHTML = "\n        <h4 class=\"title\">".concat(title, "</h4>\n        <p class=\"desc\">").concat(discription, "</p>\n        <div class=\"colors\">\n        <span class=\"red\"></span>\n        <span class=\"blue\"></span>\n        <span class=\"black\"></span>\n        <span class=\"orange\"></span>\n        <span class=\"gold\"></span>\n        <span class=\"green\"></span>\n        </div>\n      ");
      to_do_list === null || to_do_list === void 0 || to_do_list.appendChild(newToDo);
      var toDoItems = JSON.parse(localStorage.getItem("toDoItems") || "[]");
      toDoItems.push({
        title: title,
        discription: discription
      });
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
      (_document$querySelect2 = document.querySelector(".task-controller")) === null || _document$querySelect2 === void 0 || _document$querySelect2.remove();
      (_document$querySelect3 = document.querySelector(".overlay")) === null || _document$querySelect3 === void 0 || _document$querySelect3.remove();
    } else {
      console.error("Please fill title fields");
      console.error("Please fill description fields");
    }
  });
}
dataStorage();
function dataStorage() {
  var storedToDoItems = localStorage.getItem("toDoItems");
  if (storedToDoItems) {
    var toDoItems = JSON.parse(storedToDoItems);
    console.log("Retrieved ToDo Items:", toDoItems);
  } else {
    console.log("No ToDo Items found in localStorage.");
  }
}
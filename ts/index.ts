// import swal from "sweetalert";
type ExampleType = {
  num: number;
  str: string;
  bool: boolean;
};

// handle btn add new task controller
const addTask: HTMLButtonElement | null = document.querySelector(".add_task");
addTask?.addEventListener("click", () => {
  const taskController = document.createElement("div");
  taskController.className = "task-controller";

  const title = document.createElement("h2");
  title.className = "task_controller_title";
  title.innerHTML = "Add New Task";
  taskController.appendChild(title);

  const form = document.createElement("form");
  form.className = "form_controller";
  form.innerHTML = `
    <label class="tasktitle">title</label>
    <input class="input_title" type="text" placeholder="e.g. task coffee break">
    <label class="task_discription">discription</label>
    <textarea class="input_discription" type="text" placeholder="e.g, its always good to take a break. This 15 minute break Willrecharge the batteries a little." style="resize: none;"></textarea>
    <button class="create_task" type="submit">create task</button>
  `;
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
  overlay.style.zIndex = "999";
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (event) => {
    if (event.target !== taskController) {
      taskController.remove();
      overlay.remove();
    }
  });
  const closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.innerHTML = "X";
  closeButton.addEventListener("click", () => {
    taskController.remove();
    overlay.remove();
  });
  taskController.appendChild(closeButton);
  taskController.appendChild(form);
  document.body.appendChild(taskController);
  createNewToDo();

});
function createNewToDo() {
  let to_do_list = document.querySelector(".to_do_box .to_do_list");
  document.querySelector(".create_task")?.addEventListener("click", (e) => {
    e.preventDefault();
    const title = (document.querySelector(".input_title") as HTMLInputElement)
      .value;
    const discription = (
      document.querySelector(".input_discription") as HTMLInputElement
    ).value;
    if (title && discription) {
      const newToDo = document.createElement("li");
      newToDo.className = "to_do";
      newToDo.innerHTML = `
        <h4 class="title">${title}</h4>
        <p class="desc">${discription}</p>
        <div class="colors">
        <span class="red"></span>
        <span class="blue"></span>
        <span class="black"></span>
        <span class="orange"></span>
        <span class="gold"></span>
        <span class="green"></span>
        </div>
      `;
      to_do_list?.appendChild(newToDo);

      const toDoItems = JSON.parse(localStorage.getItem("toDoItems") || "[]");
      toDoItems.push({ title, discription });
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));

      document.querySelector(".task-controller")?.remove();
      document.querySelector(".overlay")?.remove();
    } else {
      console.error("Please fill title fields");
      console.error("Please fill description fields");
    }
  });
}

dataStorage()
function dataStorage() {
  const storedToDoItems = localStorage.getItem("toDoItems");
  if (storedToDoItems) {
    const toDoItems = JSON.parse(storedToDoItems);
    console.log("Retrieved ToDo Items:", toDoItems);
  } else {
    console.log("No ToDo Items found in localStorage.");
  }
}

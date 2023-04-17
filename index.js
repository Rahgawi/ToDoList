console.log("hello");
let todoInput = document.querySelector("#txt");
let todoButton = document.querySelector(".list-button");
const todoList = document.querySelector(".todo-container");

todoButton.addEventListener("click", (e) => {
  if (todoInput.value != "") {
    e.preventDefault();

    var newToDoL = document.createElement("li");
    let newToDoText = document.createElement("span");
    newToDoText.innerText = todoInput.value;
    newToDoL.appendChild(newToDoText);
    todoList.appendChild(newToDoL);
    todoInput.value = "";

    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check-circle">';
    newToDoL.appendChild(checkButton);
    checkButton.addEventListener("click", (e) => {
      newToDoL.style.textDecoration = "line-through";
    });

    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash">';
    newToDoL.appendChild(removeButton);
    removeButton.addEventListener("click", (e) => {
      todoList.removeChild(newToDoL);
    });

    const editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    newToDoL.appendChild(editButton);
    editButton.addEventListener("click", (e) => {
      editTodo(newToDoL);
      
    });
    saveTodos();

    function editTodo(todo) {
      todo.firstChild.innerHTML = todoInput.value;
    }
  }

    function saveTodos(){
        const todos =[];
        const todoItems = document.querySelectorAll(".todo-container li");
        todoItems.forEach((item)=>{
            todos.push(item.querySelector('span').innerText);
        })
    localStorage.setItem("todos",JSON.stringify(todos));
    }
    function loadTodos(){
        const todos = JSON.parse(localStorage.getItem("todos"));
    }
});

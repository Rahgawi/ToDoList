    console.log("hello");
    const todoInput = document.querySelector('txt');
    let todoButton = document.querySelector(".list-button");
    const todoList = document.querySelector(".todo-container ul");

    todoButton = addEventListener("click",(e)=>{
        if(todoInput.value != ""){
            e.preventDefault();
        
            const newToDoL = document.createElement('li');
            newToDoL.innerHTML = todoInput.value;
            todoList.appendChild(newToDoL);
            
        }

    });


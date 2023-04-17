    console.log("hello");
    let todoInput = document.querySelector('#txt');
    let todoButton = document.querySelector(".list-button");
    const todoList = document.querySelector(".todo-container");

    todoButton.addEventListener("click",(e)=>{
        if(todoInput.value != ""){
            e.preventDefault();
        
            var newToDoL = document.createElement('li');
            newToDoL.innerText = todoInput.value;
            todoList.appendChild(newToDoL);
            todoInput.value = "";
            
        
            

            const checkButton = document.createElement("button");
            checkButton.innerHTML ='<i class="fas fa-check-circle">';
            checkButton.style.backgroundColor = "#097B76";
            newToDoL.appendChild(checkButton);
            checkButton.addEventListener("click",(e)=>{
            newToDoL.style.textDecoration = "line-through";
            checkButton.style.backgroundColor = "#097B76";
        })

            const removeButton = document.createElement("button");
            removeButton.innerHTML='<i class="fas fa-trash">' ;
            removeButton.style.backgroundColor = "#097B76";
            newToDoL.appendChild(removeButton);
            removeButton.addEventListener("click",(e)=>{
            todoList.removeChild(newToDoL);
            removeButton.style.backgroundColor = "#097B76";
            })
            
            const editButton = document.createElement("button");
            editButton.innerHTML='edit' ;
            editButton.style.backgroundColor = "#097B76";
            newToDoL.appendChild(editButton);
            editButton.addEventListener("click",(e)=>{
                    
                todoList.appendChild(todoInput.value);



               // for (let index = 0; index < .length; index++) {
                  //  document.querySelectorAll('li')[index].outerText = todoInput.value;
            
                    
               // }
                
            })

            
            
        
           
            
            
        }

    });


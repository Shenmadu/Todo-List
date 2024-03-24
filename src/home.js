const todoList = document.getElementById('task-list');
const todoInput = document.getElementById("inputTask")

function taskAdd() {
    const task = document.getElementById("inputTask").value
    const li = document.createElement('li');


    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn")

    doneBtn.addEventListener('click', function () {
        li.classList.toggle("completed")

    })
   
    doneBtn.addEventListener('click', ()=> {
        li.remove();
    });



    li.textContent = task;
    li.appendChild(doneBtn);
    todoList.appendChild(li);
    todoInput.value = "";



};
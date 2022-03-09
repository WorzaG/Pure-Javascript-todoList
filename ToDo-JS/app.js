let valueTask = document.getElementById("todo");
let addbutton = document.getElementById("add");
let content = document.getElementById("content");
let check = [];
/* add task function*/

const addTask = (task) => {
  addbutton.addEventListener("click", () => {
    content.innerHTML += `<ul class = "Tasks">
         <div class="order"></div>
         <div class="task-cont">
           <li>${valueTask.value}</li>
           <div class="editing">
             <li id='check'></li>
             <li id='delete'><img src="https://img.icons8.com/external-inkubators-blue-inkubators/25/000000/external-delete-ecommerce-user-interface-inkubators-blue-inkubators.png"/></li>
           </div>
         </div>
        </ul>`;
    valueTask.value = "";
    intask();
  });
};
addTask(valueTask);

/* delete task function*/

const deleteTask = () => {
  let deletebtn = document.querySelectorAll("#delete");
  let tasks = document.querySelectorAll(".Tasks");
  for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", () => {
      tasks[i].remove();
    });
  }
};
deleteTask();

const checkTasks = () => {
  let checkbtn = document.querySelectorAll("#check");
  let tasks = document.querySelectorAll(".Tasks");
  for (let i = 0; i < checkbtn.length; i++) {
    checkbtn[i].addEventListener("click", () => {
      check.push(tasks[i]);
      checkbtn[i].style.backgroundColor = "green";
    });
  }
};
checkTasks();

const checkall = () => {
  let checkbtn = document.querySelectorAll("#check");
  let checkall = document.querySelector("#allcheck");
  checkall.addEventListener("click", () => {
    for (let i = 0; i < checkbtn.length; i++) {
      checkbtn[i].style.backgroundColor = "green";
    }
  });
};
checkall();

const deleteall = () => {
  let deletebtn = document.querySelectorAll("#delete");
  let deleteall = document.querySelector("#alldelete");
  let tasks = document.querySelectorAll(".Tasks");
  deleteall.addEventListener("click", () => {
    for (let i = 0; i < deletebtn.length; i++) {
      tasks[i].remove();
    }
  });
};

deleteall();

const intask = () => {
  deleteTask();
  checkTasks();
  checkall();
  deleteall();
};

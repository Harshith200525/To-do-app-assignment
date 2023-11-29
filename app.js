const userInput = document.getElementById("input");
const addBtn = document.getElementById("button");
const parentTodoContainer = document.getElementById("todolist");

let lis = [];

addBtn.onclick = () => {
  lis.push(userInput.value);
  userInput.value = "";
  displayTodo();
};

function displayTodo() {
  let newTodo = "";

  lis.map((todo, index) => {
    newTodo += `<li>
        ${todo}
        <a onclick="editTodo(${index})">Edit</a>
        <a onclick="deleteTodo(${index})">Delete  |</a>
        </li>`;
  });
  parentTodoContainer.innerHTML = newTodo;
}

function deleteTodo(indexValue) {
  lis.splice(indexValue, 1);
  displayTodo();
}

function editTodo(indexValue) {
  let editedone = prompt("Please enter the new one:");
  lis.splice(indexValue, 1, editedone);
  displayTodo();
}

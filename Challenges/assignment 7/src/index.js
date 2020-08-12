const todoForm = document.querySelector('.js-todo-form'),
  input = todoForm.querySelector('input');

const pendingUL = document.querySelector('.js-pending');
const finishedUL = document.querySelector('.js-finished');

// data
// let pendingArr = [];
// let finishArr = [];
let todoList = [[], []];

console.log(todoList);

function createTodo(txt){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const reBtn = document.createElement("button");
  const finiBtn = document.createElement("button");

  const newId = todoList[0].length + 1;

  delBtn.innerText = "x";
  reBtn.innerText = "↶";
  finiBtn.innerText = "✔";
  span.innerText = txt;
  
  if (pendingUL){
    pendingUL.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finiBtn);
  } else if (finishedUL) {
    finishedUL.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(reBtn);
  }

  li.id = newId;
  delBtn.className = "del";
  reBtn.className = "return";
  finiBtn.className = "finish";

  const todoObj = {
    text: txt,
    id: newId
  }

  todoList[0].push(todoObj);
  
  delBtn.addEventListener('click', eventList.deleteTodo);
  reBtn.addEventListener('click', eventList.returnTodo);
  finiBtn.addEventListener('click', eventList.finishedTodo);

  saveToDoList();
}

const eventList = {
  deleteTodo: function(e) {
    e.preventDefault();

    const btnTarget = e.target.parentNode;

    pendingUL.removeChild(btnTarget);

    // console.log();

    const cleanTodos = todoList[0].filter((toDo) => {
      return toDo.id !== parseInt(btnTarget.id)
    })

    todoList[0] = cleanTodos

    saveToDoList()
  },
  returnTodo: function (e) {
    console.log(e);
  },
  finishedTodo: function(e){
    const btnParent = e.target.parentNode.firstChild.innerText;
    console.log(e.target.parentNode.id);

    // if(btnParent){
    //   const lis = pendingUL.childNodes
    //   console.log(lis);
    //   lis.slice(btnParent - 1, btnParent+1)
    // }

  }
}

function saveToDoList(){
  localStorage.setItem("PENDING", JSON.stringify(todoList[0]));
  localStorage.setItem("FINISHED", JSON.stringify(todoList[1]));
}

function loadedToDoList(){
  const loadedParsed = localStorage.getItem('PENDING')
  const loadedFinished = localStorage.getItem('FINISHED')

  if (loadedParsed !== null || loadedFinished !== null){
    const parsedPending = JSON.parse(loadedParsed);
    const parsedFinished = JSON.parse(loadedFinished);

    console.log(parsedPending);

    let arr = [parsedPending, parsedFinished];

    for(let i = 0; i < arr.length; i++){
      arr[i].forEach((toDo) => {
        createTodo(toDo.text)
      })
    }
  
  }
  
}

function init(){
  loadedToDoList();

  todoForm.addEventListener('submit', e =>{
    e.preventDefault()
  
    const inputValue = input.value;
    
    (inputValue == "") ? alert('할일을 입력해 주세요!') : createTodo(inputValue);
   
    input.value = ""
  })
}
init()
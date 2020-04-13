const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")
const TODO_LS = "todo"

// 저장해놓는 공간
let toDo = [];

// todo를 지우는 함수
function deleteToDo(e){
    const btn = e.target;
    const li = btn.parentNode;
    //삭제 하는 함수 removeChild()
    toDoList.removeChild(li)
    
    const cleanToDo = toDo.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    });
    toDo = cleanToDo
    saveToDo();
    
}

function saveToDo(){
    // JSON --> JavaScript Object Notation 의 준말/ 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object를 바꿔주는 기능
    localStorage.setItem(TODO_LS, JSON.stringify(toDo))
}

function paintToDo(text){
    // console.log(text);
    const lis = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span");
    const newId = toDo.length + 1
   
    delBtn.innerText = "❌";
    delBtn.addEventListener( 'click', deleteToDo )
    span.innerText = text

    lis.appendChild(span)
    lis.appendChild(delBtn)
    lis.id = newId
    toDoList.appendChild(lis)

    const toDoObj = {
        text: text,
        id: newId
    }
    toDo.push(toDoObj)
    saveToDo()
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value
    paintToDo(currentValue)
    //글자를 입력하면 다시 초기화
    toDoInput.value = "";
}

function loadedToDo(){
    const loadedToDo = localStorage.getItem(TODO_LS);

    if ( loadedToDo !== null ){
        const parsedToDo = JSON.parse(loadedToDo);
        // forEach() --> array에 담겨 있는 것들 각각에 한번씩 함수를 실행시켜주는 기능.
        parsedToDo.forEach(function something(toDo){
            paintToDo(toDo.text)
        })
    } 
}

function init() {
    loadedToDo()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()
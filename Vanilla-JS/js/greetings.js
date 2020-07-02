const form = document.querySelector('.js-form'),
  input = form.querySelector("input"),
  greeting = document.querySelector('.js-greetings')

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// 로컬저장소에 저장하기
function saveName(text){
  localStorage.setItem(USER_LS, text)
  // currentUser라는 key값과 , text에 들어올 value값을 저장 한다.
}

// submit이벤트
function handleSubmit(e){
  e.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue)
}

// 이름을 묻는 함수
function askForName(){
  form.classList.add(SHOWING_CN)
  form.addEventListener("submit", handleSubmit)
}


// 이름을 붙여줘 해당 태그가 보이냐 안보이냐 css display:none으로 
function paintGreeting(text){
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text} 👋🏻`
}

// 이름 유무에 따른 행동을 판단해주는 함수
function loadName(){
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser === null){
    askForName()
  } else {
    paintGreeting(currentUser)
  }
}

function init(){
  loadName()
}
init()  
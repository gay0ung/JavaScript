// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector('#counBox');
const reBtn = document.querySelector('.re-btn');
const BG_IMG = document.querySelector('.img');

function handleChange(e){
  let seleValue = e.target.value;
  showingCountry(seleValue)
  saveValue(seleValue);
}

function handleDelete(e){
  console.log(e.target);
  deleteValue();
}
// localstorage options
function saveValue(value){
  localStorage.setItem("country", value)
}

function deleteValue(){
  localStorage.removeItem('country');
  window.location.reload();
}

function showingIMG(value){
  if (value === "Korea"){
    BG_IMG.style.backgroundImage ="url('https://i.pinimg.com/564x/4c/6d/c5/4c6dc5b13fd668fe6ed9931b753b8953.jpg')"
  } else if (value === "Greece") {
    BG_IMG.style.backgroundImage ="url('https://i.pinimg.com/564x/80/bf/c7/80bfc792976cf6a77592c26731ce9aca.jpg')"
  } else if (value === "Turkey") {
    BG_IMG.style.backgroundImage = "url('https://i.pinimg.com/564x/98/86/b0/9886b0e015e1b4c38d6838e583e717fa.jpg')"
  } else if (value === "Finland") {
    BG_IMG.style.backgroundImage = "url('https://i.pinimg.com/236x/9b/bf/fe/9bbffeb5406c7efae3b19682b1635716.jpg')"
  }
}

// key x
function askCountry(){
  select.classList.add('showing');
  select.addEventListener('change', handleChange);
}

// key o
function showingCountry(value){
  const result = document.querySelector('h1');
  result.innerText = `You are from '${value}'!`
  select.classList.remove('showing');

  reBtn.classList.add('showing');
  reBtn.addEventListener('click', handleDelete);
  
  BG_IMG.classList.add('showing');
  showingIMG(value);
}


function loadCountry() {
  // key값을 업데이트
  const userCountry = localStorage.getItem("country");

  if(userCountry === null) {
    // userCountry key값이 없는 경우에는
    askCountry()
  } else {
    // key값이 있다면 해당 value를 뿌려준다.
    showingCountry(userCountry);
  }
}

function init() {
  loadCountry()
}
init()

// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body")
const title = document.querySelector("#title")

function resizeHandler(e) {
  const  width = e.target.innerWidth

  if (width < 1346){
    title.style.color = "white"
    title.textContent = "hello! ✨"
    body.style.backgroundColor = "#feca57"
  }
   if(width <1200){
    title.style.color = "white"
    title.textContent = "hello! 💎"
    body.style.backgroundColor = "#54a0ff"
  }
   if (width < 1000) {
     title.style.color = "white"
     title.textContent = "hello! 🩱"
     body.style.backgroundColor = "#f368e0"
  }
   if (width < 800) {
     title.style.color = "white"
     title.textContent = "hello! 🧶"
     body.style.backgroundColor = "#10ac84"
  }
}
 
 function init(){
  window.addEventListener('resize', resizeHandler)
 }
 init()
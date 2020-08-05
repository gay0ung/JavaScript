// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector('#title');
title.style.color = colors[0];

const superEventHandler = {
  mouseOverHandler : function(e){
    const target = e.target
   
    target.style.color= colors[1]
    target.innerText = "The mouse is here!"
  },
  mouseOutHandler: function(e){
    const target = e.target

    target.style.color = colors[2];
    target.innerText = "The mouse is gone!"
  },
  contextmenuHandler: function(e){
    const target = e.target
    e.preventDefault();
    
    target.style.color = colors[3];
    target.innerText = "That was a rigth click!"
  },
  resizeHandler: function(e){
    const width = e.target.innerWidth;

    if(width) {
      title.style.color = colors[4]
      title.innerText = "You just resized!"
    }
  }
};

function init(){
  title.addEventListener('mouseover', superEventHandler.mouseOverHandler)
  title.addEventListener('mouseout', superEventHandler.mouseOutHandler)
  title.addEventListener('contextmenu', superEventHandler.contextmenuHandler)
  window.addEventListener('resize', superEventHandler.resizeHandler)
}
init()


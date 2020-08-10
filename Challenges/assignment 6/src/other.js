// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const COUNTRY = "Country";
const selection = document.querySelector("select");
const option = document.querySelectorAll("option");
const answer = document.createElement("h2");
const body = document.querySelector("body");
body.appendChild(answer);

function saveLocalStorage() {
  for (let i = 1; i < option.length; i++) {
    if (option[i].selected) {
      localStorage.setItem(COUNTRY, option[i].text);
      answer.innerText = `I'm from ${option[i].text}!!`;
      break;
    } else {
      localStorage.setItem(COUNTRY, null);
      answer.innerText = ``;
    }
  }
}

function loadLocalStorage() {
  const savedCountry = localStorage.getItem(COUNTRY);
  if (savedCountry) {
    for (let i = 1; i < option.length; i++) {
      if (option[i].text == savedCountry) {
        option[i].selected = true;
        answer.innerText = `I'm originally from ${option[i].text}!!`;
        break;
      }
    }
  }
}

function init() {
  loadLocalStorage();
}

init();
selection.addEventListener("change", saveLocalStorage);

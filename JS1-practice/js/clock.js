const clockContainer = document.querySelector('.js-clock');
const clockTitle = document.querySelector('h1')

function setTime(){
    // date객체는 생성자 함수 이므로 인스턴스를 생성해야 한다!
    const date = new Date()
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()

    clockTitle.innerText = `${
        hour < 10 
        ? `0${hour}` 
        :hour}:${
        minutes < 10 
        ? `0${minutes}` 
        :minutes}:${
        seconds < 10 
        ? `0${seconds}` 
        :seconds}`
}

function init(){
    setTime()
    //setInterval(function, ms)
    setInterval(setTime, 1000)
}

init()
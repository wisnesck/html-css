const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerHTML = `${formatTime(hours)}`;
    minute.innerHTML = `${formatTime(minutes)}`;
    second.innerHTML = `${formatTime(seconds)}`;


}, 1000);



function formatTime(time){
    return time < 10 ? '0' + time : time;

}
let time_serie = document.querySelector('#time-serie');
let time_exo = document.querySelector('#time-exo');
let nbr_series = document.querySelector('#nbr-series');
let nbr_exos = document.querySelector('#nbr-exos');
let num_exo = document.querySelector("#num-exo");
let num_serie = document.querySelector("#num-serie");

num_exo.max = nbr_exos.value;
num_serie.max = nbr_series.value;

nbr_exos.addEventListener("change", () => {
    num_exo.max = nbr_exos.value;
})

nbr_series.addEventListener("change", () => {
    num_serie.max = nbr_series.value;
})

let whistle = new Audio('../assets/whistle.mp3');

let date;
let hours;
let minutes;
let seconds;
let timer;

num_exo.addEventListener("change", () => {
    document.querySelector("#chrono").style.backgroundColor = "#222";
    num_serie.value = num_serie.defaultValue;

    if(timer!==null){
        clearInterval(timer);
    }
    if(num_serie != 0) {
        date = time_exo.value.split(':');
        hours = parseInt(date[0]);
        minutes = parseInt(date[1]);
        seconds = parseInt(date[2]);
        timer = setInterval(chrono, 1000);
    }
})

num_serie.addEventListener("change", () => {
    document.querySelector("#chrono").style.backgroundColor = "#222";

    if(timer!==null){
        clearInterval(timer);
    }
    if(num_serie != 0) {
        date = time_serie.value.split(':');
        hours = parseInt(date[0]);
        minutes = parseInt(date[1]);
        seconds = parseInt(date[2]);
        timer = setInterval(chrono, 1000);
    }
})

function chrono() {
    seconds--;

    if(seconds == -1){
        seconds = 59;
        minutes--;
    }
    
    if(minutes == 0 && seconds == 0){
        clearInterval(timer);
        document.querySelector("#chrono").style.backgroundColor = "red";
        whistle.play();
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#chrono").innerHTML = ` ${m} : ${s}`;
}


window.addEventListener("load", () => {

});
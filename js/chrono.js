let time_serie = document.querySelector('#time-serie');
let time_exo = document.querySelector('#time-exo');
let nbr_series = document.querySelector('#nbr-series');
let nbr_exos = document.querySelector('#nbr-exos');
let num_exo = document.querySelector("#num-exo");
let num_serie = document.querySelector("#num-serie");


let date;
let minutes;
let seconds;
let timer;
let whistle;


nbr_exos.addEventListener("change", () => {
    num_exo.max = nbr_exos.value;
    num_exo.value = num_exo.defaultValue;
    document.querySelector(".num-exo-btn").style.visibility = "visible";
})

nbr_series.addEventListener("change", () => {
    num_serie.max = nbr_series.value;
    num_serie.value = num_serie.defaultValue;
    document.querySelector(".num-serie-btn").style.visibility = "visible";
})


num_exo.addEventListener("change", () => {
    num_serie.value = num_serie.defaultValue;
    document.querySelector(".num-serie-btn").style.visibility = "visible";

    if(timer!==null){
        clearInterval(timer);
    }
    if(num_exo.value > 0 && num_exo.value <= num_exo.max) {
        date = time_exo.value.split(':');
        minutes = parseInt(date[0]);
        seconds = parseInt(date[1]);
        document.querySelector("#chrono").style.backgroundColor = "red";
        chrono();
        timer = setInterval(chrono, 1000);
        //setTimeout( () => { document.querySelector("#chrono").style.backgroundColor = "red"; }, 1000);
    }
    if(num_exo.value == num_exo.max) {
        document.querySelector(".num-exo-btn").style.visibility = "hidden";
    }
})

num_serie.addEventListener("change", () => {

    if(timer!==null){
        clearInterval(timer);
    }
    if(num_serie.value > 0 && num_serie.value <= num_serie.max) {
        date = time_serie.value.split(':');
        minutes = parseInt(date[0]);
        seconds = parseInt(date[1]);
        document.querySelector("#chrono").style.backgroundColor = "red";
        chrono();
        timer = setInterval(chrono, 1000);
        //setTimeout( () => { document.querySelector("#chrono").style.backgroundColor = "red"; }, 1000);
    }
    if(num_serie.value == num_serie.max) {
        document.querySelector(".num-serie-btn").style.visibility = "hidden";
    }
})

function chrono() {
    seconds--;

    if(seconds == -1){
        seconds = 59;
        minutes--;
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#chrono").innerHTML = ` ${m} : ${s}`;
    
    if(minutes == 0 && seconds == 0){
        clearInterval(timer);
        whistle.play();
        document.querySelector("#chrono").style.backgroundColor = "green";
        document.querySelector("#chrono").innerHTML = "Let's go !";
    }
}


window.addEventListener("load", () => {
    whistle = new Audio('../assets/whistle.mp3');
    num_exo.max = nbr_exos.value;
    num_serie.max = nbr_series.value;
});
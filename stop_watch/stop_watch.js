const time = document.querySelector("#time");
const start_button = document.querySelector("#startButton");
const stop_button = document.querySelector("#stopButton");
const reset_button = document.querySelector("#resetButton");

let Interval;
let seconds = 0;
let tens = 0;

time.textContent = "00 : 00";

start_button.addEventListener('click',function(){
    
    Interval = setInterval(function(){
        tens++;
        if (tens > 99) {
            seconds++;
            tens = 0 ;
        }
        
        if (seconds < 10){
            if (tens < 10){
                stop_time = `0${seconds} : 0${tens}`;
            }
            else {
                stop_time = `0${seconds} : ${tens}`;
            }
        }
        else {
            if (tens < 10){
                stop_time = `${seconds} : 0${tens}`;
            }
            else {
                stop_time = `${seconds} : ${tens}`;
            }
        }
        
        time.textContent = stop_time;
    },10);
    
});

stop_button.addEventListener('click' , function(){
    clearInterval(Interval);
})

reset_button.addEventListener('click', function(){
    seconds = 0 ;
    tens = 0;
    time.textContent = "00 : 00";
})

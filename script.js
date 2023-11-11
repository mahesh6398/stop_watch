
document.addEventListener("DOMContentLoaded", function () {

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;



let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;



let timeInterval = null;
let timestatus = "stopped";

function stopWatch(){
  
    seconds ++

    if(seconds/60 === 1){
        seconds=0;
        minutes++;
        if(minutes/60 === 1){
            minutes =0;
            hours ++;
        }
    }
    if (seconds<10){
        leadingseconds = "0"+seconds.toString();
    }else{
        leadingseconds = seconds;
    } 
    
    if (minutes <10){
        leadingminutes = "0"+minutes.toString();
    }else{
        leadingminutes = minutes;
    }
    if (hours <10){
        leadinghours = "0"+hours.toString();
    }else{
        leadinghours = hours;
    }
let displaytime = document.getElementById('time').innerText = ` ${leadinghours}:${leadingminutes}:${leadingseconds} `;
}

// // window.setInterval(stopWatch,10)
startStopBtn.addEventListener("click",function() {
    if(timestatus==="stopped")
    {
    timeInterval = window.setInterval(stopWatch,1000);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timestatus= "started";
    }
    else
    {
    window.clearInterval(timeInterval);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timestatus= "stopped"
    }

});

resetBtn.addEventListener("click",function(){
    console.log("hj")
    window.clearInterval(timeInterval);
    seconds = 0;
 minutes = 0;
 hours = 0;
 document.getElementById('time').innerHTML="00:00:00";
});

});


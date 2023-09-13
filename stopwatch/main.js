let displayTime = document.getElementById('display');
let timer = null;
let [hour, minute, second] = [0,0,0];

function stopwatch(){
  second++;
  if (second == 60){
    second = 0;
    minute++;
    if (minute == 60){
      minute = 0;
      hour++;
    }
  }
  let h = hour < 10 ? "0" + hour:hout;
  let m = minute < 10 ? "0" + minute:minute;
  let s = second < 10 ? "0" + second:second;
  
  displayTime.innerHTML = h + ":" + m + ":" + s;
}
function start(){
  if (timer != null){
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function pause(){
  clearInterval(timer);
}
function reset(){
  clearInterval(timer);
  [hour, minute, second] = [0,0,0];
  displayTime.innerHTML = "00:00:00";
}


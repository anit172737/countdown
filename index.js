const updateTimer=() =>{
 let newYear = Date.parse("jan 1, 2022 00:00:00");
 let now = new Date();
 let diff = newYear - now;

 let days = Math.floor(diff / (1000 * 60 * 60 * 24));
 let hours = Math.floor(diff / (1000 * 60 * 60));
 let mins = Math.floor(diff / (1000 * 60));
 let secs = Math.floor(diff / 1000);

 let d = days;
 let h = hours - days * 24;
 let m = mins - hours * 60;
 let s = secs - mins * 60;

 document.getElementById("timer")
  .innerHTML =
  '<div>' + d + '<span>Days</span></div>' +
  '<div>' + h + '<span>Hours</span></div>' +
  '<div>' + m + '<span>Minutes</span></div>' +
  '<div>' + s + '<span>Seconds</span></div>';

  if(diff <= 0 ){
    document.getElementById("timer")
    .innerHTML = '<h1>Happy New Year !!!</h1>'
  }
}
setInterval('updateTimer()', 1000);

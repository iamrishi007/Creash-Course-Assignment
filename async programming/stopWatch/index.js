let isStop = true;

var seconds = 0
let minutes = 0
let hours = 0

function start() {
     if (isStop == true) {
          isStop = false;
          timer();
     }

}

function timer() {

     seconds = Number(seconds)
     minutes = Number(minutes)
     hours = Number(hours)
     if (isStop == false) {

          seconds += 1

          if (seconds == 60) {
               seconds = 0
               minutes += 1
          }

          if (minutes == 60) {
               minutes = 0
               hours += 1
          }

          if (seconds < 10) {
               seconds = "0" + seconds
          }
          if (minutes < 10) {
               minutes = "0" + minutes
          }
          if (hours < 10) {
               hours = "0" + hours
          }
          timeStart.innerHTML = hours + " : " + " " + minutes + " : " + " " + seconds + " s "
          if (minutes > 0) {
               timeStart.innerHTML = hours + " : " + " " + minutes + " m " + " : " + " " + seconds + " s "

          }

          if (hours > 0) {
               timeStart.innerHTML = hours + " hr " + " : " + " " + minutes + " m " + " : " + " " + seconds + " s "

          }
          setTimeout('timer()', 1000)
     }
}

function pause() {
     isStop = true
}

function reset() {
     isStop = true
     seconds = 0
     minutes = 0
     hours = 0
     timeStart.innerHTML = "00 : 00 : 00 "
}
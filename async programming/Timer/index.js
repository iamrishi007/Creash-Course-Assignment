let totalSeconds = 0;
let id;

function start() {

     totalSeconds =
          Number(document.getElementById('hours').value) * 3600 +
          Number(document.getElementById('minutes').value) * 60 +
          Number(document.getElementById('seconds').value);

     if (totalSeconds <= 0 || isNaN(totalSeconds)) {
          alert('Please Enter Valid Time');
          return;
     }

     id = setInterval(updateTime, 1000);
}

function pause() {
     clearInterval(id);
     id;
}

function reset() {
     clearInterval(id);
     id;
     totalSeconds = 0;
     document.getElementById('hours').value = '0';
     document.getElementById('minutes').value = '0';
     document.getElementById('seconds').value = '0';
}

function updateTime() {
     if (totalSeconds == 0) {
          clearInterval(id);
          id;
          alert('Time is up!');
          document.getElementById('seconds').value = '0';
          return;
     }

     let hours = Math.floor(totalSeconds / 3600);
     let minutes = Math.floor((totalSeconds % 3600) / 60);
     let seconds = totalSeconds % 60;

     document.getElementById('hours').value = hours;
     document.getElementById('minutes').value = minutes;
     document.getElementById('seconds').value = seconds;
     totalSeconds--;
}

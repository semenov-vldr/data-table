const timer = document.querySelector('.timer');

if (timer) {

const hour = timer.querySelector('.timer__hour input');
const minute = timer.querySelector('.timer__min input');
const second = timer.querySelector('.timer__sec input');
const startBtn = timer.querySelector('.timer__start');
const pauseBtn = timer.querySelector('.timer__pause');
const resetBtn = timer.querySelector('.timer__reset');

let interval;


  startBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    startBtn.disabled = true;
    startTimer();
  });



  function startTimer () {
    second.readOnly = true;

    function countdown () {
      const minMaxMinute = minute.value > 0 && minute.value < 60;
      const minMaxHour = hour.value > 0 && hour.value < 24;
      const minMaxSecond = second.value > 0 && second.value < 60;

      if (minMaxSecond) {
        if (second.value <= 10) {
          second.value--;
          second.value = '0' + second.value;
        } else {
          second.value--;
        }
      }
      else {
        second.value = 60;
        second.value--;
        if (minute.value <=10) {
          minute.value --;
          minute.value = '0' + minute.value;
        } else {
          minute.value --;
        }
      }

      if (!minMaxMinute && !minMaxSecond) {
        minute.value = 60;
        minute.value--;

        if (hour.value <=10) {
          hour.value --;
          hour.value = '0' + hour.value;
        } else {
          hour.value --;
        }
      }


       if (!minMaxSecond && !minMaxMinute && !minMaxHour) {
         resetTimer();
       }

      // if (hour.value === 0 && minute.value === 0 && second.value === 0) {
      //   resetTimer();
      // }

    }
    interval = setInterval(countdown,1000);


  }



  function clearTimer () {
    clearInterval(interval);
    startBtn.disabled = false;
    second.readOnly = false;
  }

  pauseBtn.addEventListener('click', clearTimer);



  function resetTimer () {
    clearTimer();
    hour.value = "00";
    minute.value = "00";
    second.value = "00";
  }

  resetBtn.addEventListener('click', resetTimer);



}

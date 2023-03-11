let str = "AAAABBBCCDAABBB";

function uniqueInOrder (iterable) {
  let arrSrt = iterable.split('');

 let filterArr = arrSrt.filter(el => el === "A" || "B")

  return filterArr
}




//console.log(uniqueInOrder(str))
//
//
// // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// // uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const dataForm = document.querySelector('.data-form');

if (dataForm) {
  handleDataForm();
}

  function handleDataForm () {

    //----добавление и удаление строки формы---------
    function addDataFormItem () {
      const dataFormContent = dataForm.querySelector('.data-form__content');
      const template = document.querySelector('.data-form-item-template').content.cloneNode(true);
      const dataFormItem = template.querySelector('.data-form__item');
      dataFormContent.appendChild(dataFormItem);
      const deleteDataFormItem = dataFormItem.querySelector('.data-form__item-delete');
      deleteDataFormItem.addEventListener('click', () => dataFormItem.remove());
    }

    addDataFormItem ();

    const buttonAdd = dataForm.querySelector('.data-form__buttons-add');
    buttonAdd.addEventListener('click', addDataFormItem);


    // -------Обработка формы----------
    function serializeForm() {
      const formItemList = dataForm.querySelectorAll('.data-form__item');
      const arrData = [];
      formItemList.forEach(formItem => {
        const { elements } = formItem;
        const objData = {};
        const data = Array.from(elements)
          .filter(item => !!item.name)
          .map(element => {
            const { name, value } = element;
            objData[name] = value;
          });
        arrData.push(objData);
        console.log(JSON.stringify(arrData));
        return arrData;
      })
    }

    function handleFormSubmit(evt) {
      evt.preventDefault();
      const obj = serializeForm();
      sendDataForm(obj)
    }

    function sendDataForm (obj) {
      const url = 'assets/php/index.php';
      fetch(url, {
        method: "POST",
        body: 'json=' + JSON.stringify(obj),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type' : "application/json",
        },
      }).then((responce) => responce.json())
        .then((json) => console.log(json))
        .finally();
    }

    dataForm.addEventListener('submit', handleFormSubmit);





  }

const timer = document.querySelector('.timer');

if (timer) {

const timerFields = timer.querySelectorAll('.timer__value input');

const hour = timer.querySelector('.timer__hour input');
const minute = timer.querySelector('.timer__min input');
const second = timer.querySelector('.timer__sec input');
const startBtn = timer.querySelector('.timer__start');
const pauseBtn = timer.querySelector('.timer__pause');
const resetBtn = timer.querySelector('.timer__reset');

let interval;

function sliceValue () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
}

  timerFields.forEach(timerField => {
    timerField.addEventListener('keydown', sliceValue);
    timerField.addEventListener('keyup', sliceValue);
  });



  timer.addEventListener('submit', (evt) => {
    evt.preventDefault();
    startTimer();
  });



  function startTimer () {
    second.readOnly = true;
    minute.readOnly = true;
    hour.readOnly = true;
    startBtn.disabled = true;


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
    minute.readOnly = false;
    hour.readOnly = false;
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

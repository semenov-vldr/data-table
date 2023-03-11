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

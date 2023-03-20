
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
        Array.from(elements)
          .filter(item => !!item.name)
          .map(element => {
            const { name, value } = element;
            objData[name] = value;
          });
        arrData.push(objData);
        console.log(JSON.stringify(arrData));
      });
      return arrData;
    }

    function handleFormSubmit(evt) {
      evt.preventDefault();
      const obj = serializeForm();
      sendDataForm(obj);
      dataForm.reset();
    }


    function sendDataForm (obj) {
      const url = '/assets/php/post.php';
      fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json; charset=utf-8" },

      })
        .then(responce => responce.text())
        .then(function(resp) {
          document.querySelector('.message').textContent = resp;
        })
        .catch(error => console.error(error));
    }

    dataForm.addEventListener('submit', handleFormSubmit);

  }

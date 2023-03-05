
const dataForm = document.querySelector('.data-form');


if (dataForm) {

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

  function serializeForm(formNode) {
   const formItemList = formNode.querySelectorAll('.data-form__item');
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
     console.log(JSON.stringify(arrData))
     return arrData;
   })
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    serializeForm(dataForm);
  }

  dataForm.addEventListener('submit', handleFormSubmit);


}


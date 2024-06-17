
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputElem = document.querySelector('input');
const spanElem = document.querySelector('span');
inputElem.addEventListener('input', function (e) {
    spanElem.textContent = inputElem.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnElem = document.querySelector('.messageBtn');

btnElem.addEventListener('click', function (e) {
    btnElem.classList.add('animate_animated', 'animate_fadeInLeftBig');
    btnElem.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

let formElement = document.querySelector('.form');

const inputElement = formElement.querySelector('input');
const selectElement = formElement.querySelector('select');

const btnElem = formElement.querySelector('.sendForm');

function validationInput(element) {
    if (element.value === null || element.value === "") {        
        element.classList.add('error');        
        return false;
    } else {        
        element.classList.remove('error');
        return true;
    }
}


function validationSelect(selectElement) {    
    if (selectElement.value === "") {
        selectElement.classList.add('error');        
        return false;
    } else {
        selectElement.classList.remove('error');        
        return true;
    }
}

btnElem.addEventListener('click', function (e) {
    e.preventDefault(); 

    if (validationInput(inputElement) && validationSelect(selectElement) ) {
        formElement.submit();
    }   
});









// btnElem.addEventListener('click', function (e) {
//     e.preventDefault();
//     validationForm(inputElement);
//     validationForm(selectElement);
//     // allForm.forEach(element => {
//     //     if (element.value === ''){
//     //         element.classList.add('error');
//     //         element.style.border = '3px solid green';
//     //     }
//     // });
// });

// const validationForm = (array) => {
//     array.forEach(element => {
//         console.log(element);
//         if (element === null || element === "") {
//             alert('Form is empty');
//         }
//         else alert('Ok');
//     });
// }



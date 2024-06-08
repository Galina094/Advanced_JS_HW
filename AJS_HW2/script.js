
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const allEl = document.querySelectorAll('.dropdown-item');

allEl.forEach(element => {
    element.classList.add('.super-dropdown');    
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const myBtn = document.querySelector('.btn');
console.log(myBtn);

if (myBtn.classList.contains('btn-secondary')) {
    myBtn.classList.remove('btn-secondary');
} else {
    myBtn.classList.add('btn-secondary');
}

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuClass = document.querySelector('.menu');
menuClass.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divDrop = document.querySelector('div');
divDrop.insertAdjacentHTML("beforebegin", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const newEl = document.querySelector('[id = "dropdownMenuButton"]');
newEl.setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const newEl2 = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
newEl2.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const newEl3 = document.querySelector('.dropdown-toggle');
newEl3.removeAttribute('type');

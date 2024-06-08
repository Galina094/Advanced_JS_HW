// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const elemGetId = document.getElementById('super_link');
console.log(elemGetId); 
console.log(document.getElementById('super_link'));

//     2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const allCardElem = document.querySelectorAll('.card-link');
allCardElem.forEach(element => {
    element.textContent = 'Ссылка';    
});

//     3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

let allElem = document.querySelectorAll('.card-body > .card-link');
allElem.forEach(element => {
    console.log(element);
});

//     4. Найти первый попавшийся элемент на странице у которого есть атрибут data - number со значением 50 и вывести его в консоль.

const firstElem = document.querySelector('[data-number="50"]');
console.log(firstElem);

//     5. Выведите содержимое тега title в консоль.

const titleElem = document.body.getElementsByTagName('$title');
console.log(titleElem);

//     6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

//     7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const newP = document.createElement('p');
newP.textContent = 'Привет';
const cardClass = document.querySelector('.card');
cardClass.prepend(newP);

// 8. Удалите тег h6 на странице.

const tegH6 = document.querySelector('h6');
tegH6.remove();
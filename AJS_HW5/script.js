// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).


// const parseData = JSON.parse(data);
// console.log(parseData);

// const divEl = document.querySelector('.content');

// parseData.forEach(element => {
//     divEl.insertAdjacentHTML('beforeend', 
//         `<h3>${element.title}</h3>
//         <img src="${element.url}" alt="">
//         <img src="${element.thumbnailUrl}" alt="">`
//     )
// });


const url = `https://jsonplaceholder.typicode.com/posts/1/comments`;

const getData = async (url) => {
    try {
        const response = await fetch(url);
        const dataFromServer = await response.json();
        return dataFromServer;
    } catch (error) {
        console.log('Ошибка');
    }
}

const btElement = document.querySelector('button');
const divEl = document.querySelector('.content');

btElement.addEventListener('click', async (e) => {
    const fetchData = await getData(url);    
    console.log(fetchData);

    fetchData.forEach(element => {
        divEl.insertAdjacentHTML('beforeend', 
            `<div class="div__div"><e-mail>${element.email}</e-mail>
             <p>${element.body}</p></div>`            
        )              
    });   
});

// const fetchData = await getData(url);
// console.log(fetchData);

// script.js:56 Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (at script.js:56:19)

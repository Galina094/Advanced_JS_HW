
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

// document.addEventListener('DOMContentLoaded', () =>{
//     console.log('все теги прогрузились');
// });

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

// window.addEventListener('load', () =>{
//     console.log('страница загрузилась');
// });

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const bodyEl = document.querySelectorAll('body');

bodyEl.forEach(element => {
    element.addEventListener('click', function (event) {
        
        const target = event.target.className;         
        const targetTag = event.target.tagName.toLowerCase();        
        
        if (target === "super_element") {
            console.log(`Класс "super_element" присутствует в элементе`, targetTag);            
        } else {
            console.log(`Класс "super_element" отсутствует в элементе`, targetTag);            
        }             
    });
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// const areaElement = document.querySelectorAll('textarea');

// areaElement.forEach(element => {
//     element.addEventListener('mousemove', () =>{
//         console.log(`Вы навели на textarea.`);
//     })
// });

// areaElement.addEventListener('mousemove', () => {
//     console.log(`Вы навели на textarea.`);
// });


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulElement = document.querySelectorAll('ul>li');

ulElement.forEach(element => {
    const liChild = element.querySelector('button')
    liChild.addEventListener('click', () =>{
        console.log(element.textContent);
    })
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Предположу, что текст из 3 задания выводится после 5ого, в связи с иерархией DOM и, соответственно, с иерархитей элемиентов в этой структуре, а также из-за того, как постороена работа этих двух узлов программы. В 3 задании мы обращаемся кодному из верхних узлов - body, соответствено и обработан запрос к верхнему тегу будет позже, чем к нижнему.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const tagLi = document.querySelectorAll('li');

for (let i = 0; i <= tagLi.length; i+=2) {    
    tagLi[i].style.backgroundColor = 'green';    
}
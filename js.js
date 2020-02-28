// Задание: (Корзина Товаров)
// Вам дается ссылка на js файл ее вы подключаете перед вашим script.js:

// <scrip<src="https://nibltaov.github.io/dz5/script.js"></script>
// Которая отдает function cartobj() а эта функция отдает вам рандомный обьект 
// Например:
// {
//             'Lavash': {
//                 info: 'Big Cheese',
//                 price: 15000
//             },
//             'Hot-dog': {
//                 info: 'mini',
//                 price: 8500
//             },
//             'Cola': {
//                 info: '1.5 L',
//                 price: 9000
//             }
//         }
// Вы должны при помощи цыкла взять данные из этой ссылки вывести конечную строку в console:
// Где будет выведен список заказа и в конце общая стоимость заказа сразу с доставкой.
// должно выглядеть так 
// Вы заказали Lavash big cheese,Hot-dog mini,Cola 1.5 L, | Общая стоимость 41500сумм с доставкой (9000)


let obj = cartObj();
let delivery = 9000; // Доставка
let sum = delivery;
let array = [];
for (let key in obj) {
    array.push(`${key} ${obj[key].info}`);
    sum += obj[key].price;
}
console.log(`Вы заказали ${array.join()} | Общая стоимость ${sum}сумм с доставкой (${delivery})`);

"use strict"
let title = prompt("Как будет называться Ваш проект?");
let screens =  prompt("Какие типы экранов нужно разработать? Простые, сложные или интерактивные?");
let screenPrice = prompt("Сколько будет стоить эта работа?")
let rollback = 50; 
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуг нужен?")
let priceService1 = prompt("Сколько услуга1 будет стоить?") 
let service2 = prompt("Какой дополнительный тип услуг нужен?")
let priceService2 = prompt("Сколько услуга2 будет стоить?") 
let fullPrice = (+screenPrice) + (+priceService1) + (+priceService2);
let servicePercentPrice = fullPrice * rollback/100 // как округлить число, так и не понял


if (fullPrice > 30000) {
    console.log("Даём скидку в 10%");
} else if ((fullPrice < 30000) && (fullPrice > 15000) && (fullPrice == 30000)) {
    console.log("даём скидку в 5%");
} else if ((fullPrice < 15000) && (fullPrice > 0) && (fullPrice == 0) && (fullPrice == 15000)) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < -0) {
    console.log("Что то пошло не так");
}

console.log(title)
console.log(screens)
console.log(adaptive)
console.log(adaptive)
console.log(servicePercentPrice)

console.log("Стоимость верстки экранов " + screenPrice  +  " рублей")
console.log("Стоимость разработки сайтов " + fullPrice  +  " рублей")
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback/100))
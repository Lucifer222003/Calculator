"use strict"
let title = prompt("Как будет называться Ваш проект?");
let screens =  prompt("Какие типы экранов нужно разработать? Простые, сложные или интерактивные?");
let screenPrice = +prompt("Сколько будет стоить эта работа?")
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуг нужен?")
let priceService1 = +prompt("Сколько услуга1 будет стоить?") 
let service2 = prompt("Какой дополнительный тип услуг нужен?")
let priceService2 = +prompt("Сколько услуга2 будет стоить?") 

let fullPrice = (screenPrice) + (priceService1) + (priceService2);
let rollback = 10; 
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
let allServicePrices;


const getAllServicePrices = function() {
    return priceService1 + priceService2;
};

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
}; 
const getServicePercentPrice = function() {
    return fullPrice - (fullPrice * (rollback / 100))
};

function getFullPrice() {
    return screenPrice + allServicePrices;
};

const getRollbackMessage = function(price) {
    if (price > 30000) {
        return "Даём скидку в 10%"
    } else if ((price <= 30000) && (price > 15000)) {
        return "Даём скидку в 5%"
    } else if ((price <= 15000) && (price >= 0)) {
        return "Скидка не предусмотрена"
    } else { (price < -0)
        return "Что то пошло не так";}
    };
    
    const showTypeof = function (variable) {
        console.log(variable, typeof variable);
    };

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getAllServicePrices();
title = getTitle(title);

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log(typeof screens);
console.log(typeof title);
console.log(typeof adaptive);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrice(servicePercentPrice));
console.log("Стоимость верстки экранов " + screenPrice  +  " рублей")
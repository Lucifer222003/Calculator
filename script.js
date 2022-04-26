"use strict"
let title 
let screens 
let screenPrice 
let adaptive

let fullPrice 
let rollback = 10; 
let servicePercentPrice
let allServicePrices;
let service1 
let service2 
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
};


const asking = function() {
    title = prompt("Как будет называться Ваш проект?", "Калькулятор");
    screens =  prompt("Какие типы экранов нужно разработать? Простые, сложные или интерактивные?", "Простые, сложные");

    do {
        screenPrice = prompt("Сколько будет стоить эта работа?")
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");

}

const getAllServicePrices = function () {
    let sum = 0
    let n
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 =  prompt("Какой дополнительный тип услуг нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуг нужен?")
        }
        do {
             n = prompt("Сколько это будет стоить?");
    } while (!isNumber(n))
    sum += +n
}
    return sum
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

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle(title);

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(typeof screens);
console.log(typeof title);
console.log(typeof adaptive);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrice(servicePercentPrice));
console.log("Стоимость верстки экранов " + screenPrice  +  " рублей")
console.log(!isNaN(parseFloat) && isFinite())
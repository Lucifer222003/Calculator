let title = "MyProject";
let screens = "Large, Medium, Small"
let screenPrice = 20;
let rollback = 50; 
let fullPrice = 100;
let adaptive = true;

console.log(typeof title)
console.log(typeof fullPrice);
console.log(typeof adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов " + screenPrice  +  " рублей")
console.log("Стоимость разработки сайтов " + fullPrice  +  " рублей")
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback/100))
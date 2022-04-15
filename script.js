let title = "MyProject";
console.log(typeof title)
let screens = "Large, Medium, Small"
console.log(screens.length)
let screenPrice = "20";
console.log(typeof screenPrice)
let rollback = "50";
let fullPrice = "100";
console.log(typeof fullPrice);
let adaptive = true;
console.log(typeof adaptive)

console.log(screenPrice.toUpperCase())
console.log(fullPrice.toUpperCase())

console.log(screens.toLowerCase())
let razbitStrokuNaMassiv = screens.split(',');
console.log(razbitStrokuNaMassiv);

console.log(fullPrice * (rollback/100))
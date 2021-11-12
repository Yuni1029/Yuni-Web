//type number;Kelvin will be constant
let Kelvin = '0'

//type number;Celsius is 273 lower than kelvin

let Celsius = Kelvin - 273
console.log(Celsius);

let Fahrenheit = ( Celsius * (9/5) ) + 32;
console.log(Fahrenheit);

//take decimal number
console.log(Math.ceil(Fahrenheit))

//round down the Farhrenheit temperature
Fahrenheit = Math.floor(Fahrenheit)

console.log('The temperature is '+ Fahrenheit +' degrees Farhenheit.')
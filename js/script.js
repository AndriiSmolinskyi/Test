let n = 1

//> <
// >=  <=
//a == b
//a === b



// console.log(true == 1)

// a = Number(prompt('Введіть перше число'))  
// b = Number(prompt('Введіть друге число'))  

// if(a > b ){
//     alert('перше число більше')
// } else if(a === b){
//     alert('числа однакові')
// } else{
//     alert('друге число більше')
// }

// if(a > b ){
//     alert('перше число більше')
// }  else{
//     alert('друге число більше')
// }

let a = 1
let b = 1

// let result = a > b ? console.log('перше число більше') 
// : a == b ? console.log('перше число == 2') 
// : console.log('друге число більше')

// if(a > b && a === b){
//     console.log('ураааа ураваа')
// } else{
//     console.log('гоолллл')
// }

// if(a !== 2){
//     console.log("так ваще число не 2")
// }


// ==
// ===
// >
// <
// >=
// <=
// != !==

let value = 3

switch(value){
    case 1:                     //if
        console.log("its 1")
        break
    case 2:                     //else if
        console.log('its 2')
        break
    case 3:                     //else if
        console.log('its 3')
        break
    default:
        console.log('its no 1,2,3')
        break                    //else
}

let x = prompt('')

let number1 = parseFloat(prompt('Введіть перше число'))
let number2 = parseFloat(prompt('Введіть друге число число'))  
let operation = prompt("Введіть операцію + * - /")
let result = 0;

switch(operation){
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        result = 'невірнаа операція'
}

alert(`Результат ${result}`)
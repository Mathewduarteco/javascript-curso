// Escribir funcion que indica si un numero es primo

function esPrimo(numero) {

    if (numero >= 1){
        }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}

console.log(esPrimo(2)); //true
console.log(esPrimo(7)); //true
console.log(esPrimo(10)); //true
console.log(esPrimo(15)); //true
console.log(esPrimo(29)); //true
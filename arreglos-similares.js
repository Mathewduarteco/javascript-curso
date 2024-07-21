//ver si dos arreglos son similares o no

function sonSimilares(arregloA, arregloB) {
    if(arregloA.length !== arregloB.length){
        return false;
    }

    for(let indice = 0, total = arregloA.length; indice <= total; indice++)
    if(arregloA[indice] !== arregloB[indice]){
        return false;
    }
return true;
}

console.log(sonSimilares([1,2], [1,2,3])); //false
console.log(sonSimilares([1,2,3], [1,2,3])); //true
console.log(sonSimilares([1,2,3], ['1','2','3'])); //false
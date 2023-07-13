function ejercicio1() {
    let arrayVacio = [];
    for (let index = 0; index < 10; index++) {
        arrayVacio[index] = Math.round(Math.random()*10);
    }
    console.log(arrayVacio);
}

function ejercicio2() {
    let myString = prompt("Ingresa unn string con varias palabras separadas por una coma.");
    let miArreglo = myString.split(',');
    console.log("Tu string es: " + myString + " y es de tipo " + typeof myString);
    console.log("Tu string convertido en arreglo es " + miArreglo + " y es de tipo " + typeof miArreglo);
}

function ejercicio3() {
    let miArreglo = [10,40,30,20,15,5];
    function compareNumbers(a,b) {
        return a - b;
    }
    console.log("El arreglo original es " + miArreglo);
    console.log("El arreglo ordenado es " + miArreglo.sort(compareNumbers));
    console.log("El elemento mayor del arreglo es " + Math.max(...miArreglo));
    console.log("El elemento menor del arreglo es " + Math.min(...miArreglo));
}

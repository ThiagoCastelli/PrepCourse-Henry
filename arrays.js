var listaDeCompras = []

// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
console.log(listaDeCompras);

// Ver lista de compras
var elementoDelArray = listaDeCompras[3];
console.log(elementoDelArray);

// Lenght
console.log(listaDeCompras.length);

// includes

var clubesDeFutbol = ['Boca', 'Riber', 'San Silencio', 'Racing', 'El rojo'];
var incluyeABoca = clubesDeFutbol.includes('Boca');
console.log(incluyeABoca);

var incluyeABoca = clubesDeFutbol.includes('Velez');
console.log(incluyeABoca);

// Every

var numeros = [1, 7, 6, 8];
var mayoresA5 = numeros.every((num) => {
    return num > 5;
});
console.log(mayoresA5);

var numeros = [10, 7, 6, 8];
var mayoresA5 = numeros.every((num) => {
    return num > 5;
});

console.log(mayoresA5);

// Split

var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

// Arreglar la palabra mal escrita 'Henri' por 'Henry' con los otros métodos aprendidos, pop y push.

var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);


// Join

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

// ForEach

var numeros = [1, 2, 3, 4, 37, 43];
numeros.forEach((num) => console.log(num));

numeros.forEach((num) => { //por cada número
    if(num === 3) { //siempre que el número tenga 3
        console.log(num); //traeme el número
    } 
});

// Map

var masUno = numeros.map((num) => { //acá no hay especificación, entonces
    return num + 1; //este return aplica a todos los numeros, no solamente los que tengan 3.
});
console.log(masUno);



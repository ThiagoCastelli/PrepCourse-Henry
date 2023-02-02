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

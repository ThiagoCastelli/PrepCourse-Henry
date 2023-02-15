function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    return array[0];
 }

 var numeros = [1, 2, 3, 4, 5], suma = 0;
 numeros.forEach (function(numero){
     suma += numero;
 });
 console.log(suma);


 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    suma = 0;
    arrayOfNums.forEach (function(arrayOfNums){
        suma += arrayOfNums;
    });
    console.log(suma);
}
arrayOfNums = [25, 25, 25];
agregarNumeros(arrayOfNums);



function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    numeros.map((array) => {
       return array + 1
    });
 }
 var array1 = [1, 2, 3, 4]
 incrementarPorUno(array1)




 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    mayor = 0;
    for(i = 0; i < arrayOfNums.length; i++) {
       if(arrayOfNums[i] > mayor){
          mayor = arrayOfNums[i];
       };
    };
    return mayor
 }
 arrayOfNums = [8, 9, 10, 2, 4, 6];
 numeroMasGrande(arrayOfNums);

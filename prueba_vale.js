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
    return mayor;
 }
 arrayOfNums = [8, 9, 10, 2, 4, 6];
 console.log(numeroMasGrande(arrayOfNums));


 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:

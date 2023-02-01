var suma = 0

//for(var i=0 ; i<10 ; i++){
//    suma = suma +1;
//    console.log(suma);
//};

// Ahora vamos a hacer lo mismo PERO a la variable suma en vez de incrementar de a 1, se le sume la variable de iteración 
// (osea 'i').Cambiamos el console log de suma por 'i' [y le agregamos un texto bonito]. 
// Finalmente, también hacemos un console.log de 'suma' para ver el total.

for(var i=0 ; i<10 ; i++){
    suma = suma + i;
    console.log('La variable de iteración: ', i );
}
console.log('La variable suma: ', suma)

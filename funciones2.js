//Así esta bien hecho, por mas de que este el console.log, esta la parte de return, entonces en la segunda función, el resultado  
//no es undefined sino que es (en este caso) 'Camilo'.

function cuidadoconelConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return(
        "El nombre retornado por la función 'cuidadoconelConsoleLog' es: " +
        cuidadoconelConsoleLog('Camilo') 
    );
}

// Ahora voy a hacer otro pero mal hecho para ver la diferencia, por mas mínima que sea.
// Para poder correrlo, activar node en la terminal, despues copiar las funciones y luego 
//ejecutar la función poniendo el nombre de la misma.

function PruebaDelConsoleLog(nombre) {
    console.log(nombre);
    //Acá esta la diferencia, no hay un return.
}

function PruebaDeQueSaleMal() {
    return(
        "El nombre retornado por la función 'PruebaDelConsoleLog' es: " +
        PruebaDelConsoleLog('Camilo') 
    );
}

//Por otro lado, si el return está por encima del console.log, no va a aparecere el resultado del console.log
//porque la función termina cuando encuentra un return (same python).
//Ej:

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}


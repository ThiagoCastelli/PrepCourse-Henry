function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var counter = 0;
    do{   
       num += 5;
       counter++
    } while(counter < 8);
    return num;
}
 
console.log((doWhile(5)));
console.log((doWhile(40)));
console.log((doWhile(25)));
function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
    if( x > y)console.log(x);
    else if( x < y)console.log(y);
    else console.log(x, y);
 }
 
 obtenerMayor(5, 6);
 obtenerMayor(28, 9);
 obtenerMayor(8, 8);

 //___________________________________________________________________--

 function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if(edad >= 18)console.log('Allowed');
    else console.log('Not allowed');
 }
 mayoriaDeEdad(24);
 mayoriaDeEdad(9);

 //__________________________________________________________________-------------

 function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:
    if( status === 1 )console.log('Online');
    else if( status === 2 )console.log('Away');
    else console.log('Offline');
 }
 
 conection(1);
 conection(2);
 conection(99);

 //_____________________________________________________________________

 function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:
    if(idioma === "aleman")console.log("Guten Tag!");
    else if(idioma === "mandarin")console.log("Ni Hao!");
    else if(idioma === "ingles")console.log("Hello!");
    else console.log("Hola!");
 }
 
 saludo("aleman");
 saludo("mandarin");
 saludo("ingles");
 saludo("messi");

 //_______________________________________________________________________________-
 function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:
    switch (color) {
       case 'blue':
         console.log("This is blue");
         break;
       case 'red':
         console.log("This is red");
         break;
       case 'green':
         console.log("This is green");
         break;
       case 'orange':
         console.log("This is orange");
         break;
       default:
         console.log("Color not found");
     } 
 }
 
 colors('blue');
 colors('green');
 colors('yellow');

 //__________________________________________________________________________-----

 function esDiezOCinco(num) {
    // Retornar "true" si "num" es 10 o 5.
    // De lo contrario, retornar "false".
    // Tu código:
    if((num === 10) || (num === 5))console.log(true);
    else console.log(false); 
 }
 
 esDiezOCinco(10);
 esDiezOCinco(5);
 esDiezOCinco(45);

 //______________________________________________________________________________

 function estaEnRango(num) {
    // Retornar "true" si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar "false".
    // Tu código:
    if(num < 50 && num > 20)console.log(true);
    else console.log(false);
 }
 
 estaEnRango(28);
 estaEnRango(18);
 estaEnRango(108);

 //___________________________________________________________________________-

 // Este NO SE hacerlo.

 function esEntero(num) {
    // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna "false".
    // Tu código:
    if( num % 2 == 0)console.log(true);
    else console.log(false);
 }
 
 esEntero(-10);
 esEntero(0,8);
 esEntero(25);

 //__________________________________________________________________

 function fizzBuzz(num) {
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // De lo contrario, retorna el número.
    // Tu código:
    if( num % 3 == 0 && num % 5 == 0)console.log('fizzBuzz');
    else if (num % 3 == 0)console.log('fizz');
    else if (num % 5 == 0)console.log('Buzz');
    else console.log(num);
 }
 
 fizzBuzz(15);
 fizzBuzz(9);
 fizzBuzz(25);
 fizzBuzz(2);

 //________________________________________________________

 function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si alguno de los argumentos es cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
    if( num1 > num2 && num1 > num3 && num1 > 0)console.log('Numero 1 es mayor y positivo');
    else if( num1 < 0 || num2 < 0 || num3 < 0 )console.log('Hay negativos');
    else if( num3 > num1 && num3 > num2)console.log(num3 + 1);
    else if( num1 == 0 || num2 == 0 || num3 == 0)console.log("Error"); //Este me sale mal, nose por que!
    else console.log(false);
 }
 
 operadoresLogicos(1, 4, 7);
 operadoresLogicos(-10, 90, 5);
 operadoresLogicos(10, 8, 7);
 operadoresLogicos(250, 0, 7);
 operadoresLogicos(4, 28, 2);

 //__________________________________________________________-

 function esVerdadero(valor) {
    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:
    if( valor == true)console.log('Soy verdadero');
    else console.log('Soy falso');
 }
 
 esVerdadero(true);
 esVerdadero(false);

 //_____________________________________________________________

 function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar True.
    // Caso contrario, retornar False.
    // Tu código:
    if(num > 99 && num < 1000)console.log(true);
    else console.log(false);
 }
 
 tieneTresDigitos(342);
 tieneTresDigitos(20);

 //_______________________________________________________________

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
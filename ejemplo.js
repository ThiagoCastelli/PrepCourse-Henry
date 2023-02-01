function combinarNombres(nombre, apellido) {
    // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
    // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
    // Tu código:
    var nombre = 'Soy ';
    var apellido = 'Henry';
    var combinarNombres = nombre + apellido;
    console.log(combinarNombres);
}

var nombre = 'Soy ';
var apellido = 'Henry';
var combinarNombres = nombre + apellido;
console.log(combinarNombres);

var nombre = 'Martín';
var obtenerSaludo = 'Hola ' + nombre;
console.log(obtenerSaludo);


var alto = 20;
var ancho = 10;
var obtenerAreaRectangulo = alto * ancho;
console.log(obtenerAreaRectangulo);

var perimetro = 10;
var retornarPerimetro = perimetro * 4;
console.log(retornarPerimetro);

var base = 20;
var altura = 10;
var obtenerAreaRectangulo = base * altura;
console.log(obtenerAreaRectangulo);

var euro = 1500;
var deEuroAdolar = euro * 1.2;
console.log(deEuroAdolar);

function isVocal(char){
    if(["a", "e", "i", "o", "u"].includes(char.toLowerCase())){
      console.log("Vocal!")  
    }else {
      console.log("Not a vocal!")
    }
  }
  
  isVocal("a"); //Vocal!
  isVocal("j"); //Not a vocal!
  isVocal("test"); //Not a vocal!
  isVocal(""); //Not a vocal!
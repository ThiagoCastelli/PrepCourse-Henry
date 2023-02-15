//function Auto(puertas, color, marca, año, ruedas) {
  //  this.puertas = puertas;
  //this.color = color;
  //  this.marca = marca;
  //  this.año = año;
  //  this.ruedas = ruedas;

  //  this.informacion = function () {
  //      console.log('Este es un ' + this.marca + ' de color ' + this.color)
  //  };
//}

//var miPrimerAuto = new Auto(5, 'Gris Oscuro', 'Chevrolet', 2021, 4);

//console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);
//miPrimerAuto.informacion();

class Auto {
    constructor (puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    };

    informacion(){
        console.log('Este es un ' + this.marca + ' del ' + this.año + ' de color ' + this.color);
    }
}

var miSegundoAuto = new Auto(4, 'Gris Claro', 'BMW', 2018, 4);

//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);
//miSegundoAuto.informacion()

class Football {
    constructor(jugador){
        this.jugador = jugador
    }

    obtenerInformacion (){
        console.log(this.jugador)
    };
}

var argentina = new Football('Messi');
var brasil = new Football('Dinho');

argentina.obtenerInformacion()
brasil.obtenerInformacion()

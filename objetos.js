var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

 persona.nombre = 'Thiago'

 console.log(persona.nombre)

 var autos = {};
 autos.marcas = ['Chevrolet', 'Audi', 'BMW'];
 delete autos.marcas; 
 console.log(autos);

 var misFunciones = {
    saludar: function () {
        console.log('Hola');
    },
 };

misFunciones.saludar(); 

var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Medias'] };

atuendos['piernas'] = ["Pantalon", 'Bermuda'];

console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);


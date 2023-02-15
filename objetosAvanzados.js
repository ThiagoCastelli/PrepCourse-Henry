var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('genero');
//console.log(tienePropiedad);

var todasLasPropiedas = Object.keys(libro);
//console.log(todasLasPropiedas);

var mundo = {continentes: 7, paises: 195, oceanos: 5 };
for(var prop in mundo){
   // console.log("Esta es la propiedad: " + prop);
   // console.log('Este es el valor ' + mundo[prop]);
}

var mascota = {
    animal: 'perro',
    raza: 'callejero',
    amistoso: true,
    dueña: 'annie',
    info: function() {
        console.log('Mi perro es un ' + this.raza)
    },
};

mascota.info();
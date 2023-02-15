class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años.');
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    };

    codear() {
        console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años. Codeo desde ' + this.añosDeExperiencia + ' años.');
    }
}

var Martin = new Persona('Martin', 28);
var Coder = new Programador('Santi', 24, 4);
Martin.saludar();
Coder.codear();
Coder.saludar();

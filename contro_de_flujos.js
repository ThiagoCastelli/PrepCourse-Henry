function viajar(destino) {
    if (destino === 'Brasil') {
        console.log("Gire a la DERECHA");
    } else if (destino === 'Argentina') {
        console.log("Gire a la IZQUIERDA");
    } else {
        console.log('Nos Perdimos');
    }
}

viajar('Brasil');

viajar('Argentina');

viajar('Chile');

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}

puedeManejar(18);
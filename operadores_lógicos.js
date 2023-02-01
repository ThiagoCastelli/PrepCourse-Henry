// Operador "and (Y)". En este condicional anidado se tienen que cumplir todas las condiciones.

function mayorYMenor(num){
    if( num > 5 && num <10 )console.log(true);
    else console.log(false);

};

mayorYMenor(3);
mayorYMenor(7);

function mayor_y_menor_y_par(num){
    if( num > 5 && num <10 && num % 2===0 )console.log(true);
    else console.log(false);

};

mayor_y_menor_y_par(9);
mayor_y_menor_y_par(8);

// Operador "Or (O)". en este condicional anidado no deben cumplirse todas las condiciones, con que se cumpla una la operación se ejecuta.

function operador_or(str){
    if(str === 'Henry' || str.length < 2)console.log(true);
    else console.log(false);
};
    
operador_or('Henry');
operador_or('H');
operador_or('Thiago');

// Aca vemos el condicional "NOT". Se usa para saber si un str, num, etc es igual a otro o no por ejemplo.

function negacion(permiso){
    if(permiso === true) console.log('Tiene permiso');
    else console.log('No tiene permiso');
};

negacion(true);
negacion(false);

//Combinamos condiciones, en este caso las && y ||.

function operacion_compleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

operacion_compleja(10);
operacion_compleja(8);
operacion_compleja(3);
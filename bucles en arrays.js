// for

var arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length ; i++ ) {
    console.log(arr[i]);
}

function encontrarLetraP (string) {
    var letras = string.split('');

    for (let i = 0; i < letras.length; i++) {
        if(letras[i] === 'p') {
            console.log('Si tiene la letra P');
        }
    }
}

encontrarLetraP('JavaScrip');
encontrarLetraP('Messi');

// While

var array = [];

while (array.lenght < 5) {
    array.push('Messi');
}

console.log(array);
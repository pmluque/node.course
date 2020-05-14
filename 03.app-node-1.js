/* Todos los require */
// no lleva la / por lo que es módulo de tercero o nativo.
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: true,
            alias: 'l',
            default: 10
        }
    })
    .argv;
// const fs = require('fs');
// const multiplicar = require('./03.app-node-1-mult');
// Desestructuración, para ello especificamos llaves
const { crearArchivo } = require('./03.app-node-1-mult');

let comando = argv._[0]; // primera orden
switch (comando) {
    case 'lista':
        console.log('Listar');
        break;
    case 'crear':
        console.log('Listar');
        break;
    default:
        console.log('Comando no reconocido !');



}

/* Variables */
// let data = '';
let base = 5;

/* Recoger parámetros */
//let argv = process.argv;
//let param = argv[2]; // 3ª posición del array  --base=3
//param = param.split('=')[1]; // 2ª posicion
//base=param;
// Control de errores y control de reconocimiento del nombre de argumento
// USAR YARGS
let params = process.argv;
console.log(argv);
console.log(argv.limite);
//console.log(params);


/* Chequeos */
//console.log(module);
//console.log(multiplicar);
//console.log(process);
//console.log(process.argv);

/* Lógica */
/* MOVER LOGÍCA A UN FICHERO : 03.app-node-1-mult.js
for (i = 1; i <= 10; i++) data += `${base} x ${i} = ${base * i} \n`;

fs.writeFile(`ficheros/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
*/


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo} creado !`))
    .catch(error => console.log(error));
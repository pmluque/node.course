/* Todos los require */
const argv = require('./config/yargs').argv; // No se coge todo el objeto sino solo una parte.
const { crearArchivo, listarTabla } = require('./03.app-node-1-mult');


/* Variables */
let comando = argv._[0]; // primera orden
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo} creado !`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido !');

}
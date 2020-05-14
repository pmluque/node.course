/* Todos los require */
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', {
        base: {
            demand: true,
            alias: 'b',
            default: 1
        },
        limite: {
            demand: true,
            alias: 'l',
            default: 10
        }
    })

.command('crear', 'Crear fichero de la tabla multiplicar base de 1 a limite', {
        base: {
            demand: true,
            alias: 'b',
            default: 1
        },
        limite: {
            demand: true,
            alias: 'l',
            default: 10
        }
    })
    .argv;

const { crearArchivo, listarTabla } = require('./03.app-node-1-mult');

/* Variables */
console.log(argv);
console.log(argv.base);
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
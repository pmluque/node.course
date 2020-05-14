const opts = {
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
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', opts)
    .command('crear', 'Crear fichero de la tabla multiplicar base de 1 a limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}
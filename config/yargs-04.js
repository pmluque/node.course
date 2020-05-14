const opts = {
    task: {
        demand: true,
        alias: 't',
        desc: 'text of task'
    },
    complete: {
        demand: false,
        alias: 'c',
        desc: 'value of complete : true or false',
        default: false
    }
}

// Podría segmentar cada una de las opciones

const argv = require('yargs')
    .command('new', 'Create new task in todo', opts)
    .command('list', 'List tasks')
    .command('update', 'Update the property <complete> of task', opts)
    .command('delete', 'Delete task', {
        task: {
            demand: true,
            alias: 't',
            desc: 'text of task for deleting'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
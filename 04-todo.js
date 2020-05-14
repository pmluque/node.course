/*
 Paquetes asociados: yargs , colors

 Lista de comandos de TODO -t:tarea  -c:completada
  > node 04-todo new -t "Pasear al perro"
  > node 04-todo list
  > node 04-todo update -t "Pasear al perro" -c true
*/
// const argv = require('yargs').argv;
const argv = require('./config/yargs-04').argv;

// Importo funciones propias
const { op_new, op_list, op_update, op_delete } = require('./04-todo-services')

let result = '';

let comando = argv._[0];
switch (comando) {
    case 'new':
        let task = op_new(argv.task);
        console.log('new', task);
        break;

    case 'list':
        let theList = op_list();
        console.log('list');
        for (let task of theList) {
            console.log(`Estado: ${task.complete}  - Tarea: ${task.task} `);
        }
        break;

    case 'update':
        result = op_update(argv.task, argv.complete);
        console.log('update :', result);
        break;

    case 'delete':
        result = op_delete(argv.task);
        console.log('delete :', result);
        break;

    default:
        console.log('comando no reconocido !');

}
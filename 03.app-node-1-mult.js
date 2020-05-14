/* Todos los require */
const fs = require('fs');
const colors = require('colors');
const colorsafe = require('colors/safe');

/* Variables */
let data = '';



/* Métodos */

// 1ª forma de declarar un módulo
// module.exports.crearArchivo = (base) ...
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // Control de errores
        if (!Number(base)) {
            reject(`Error: base no es un número ${base}`);
            return;
        }

        for (i = 1; i <= limite; i++) data += `${base} x ${i} = ${base * i} \n`;

        fs.writeFile(`ficheros/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`The file tabla-${base}.txt has been saved!`);
        });
    });
}


let listarTabla = (base, limite) => {

    console.log('==============='.green);
    console.log('     TABLA     '.blue);
    console.log('==============='.red);
    for (i = 1; i <= limite; i++) console.log(`${base} x ${i} = ${base * i}`);

}


// FORMAS DE AGREGAR INFO AL MODULO para poder ser requerido
// 2ª forma de declarar un módulo (preferida)
//module.exports = {
//    crearArchivo : crearArchivo
//}
module.exports = {
    crearArchivo,
    listarTabla
}
/*
 Preliminares
 > npm init
 > npm -i --save yargs

 Objetivo
 > node app -d Madrid España    --> mostrar clima con solo esa dirección


*/

/* Paquetes */
const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'the adress of location to get the weather',
        demand: true
    }
}).argv;
//console.log(argv.location);

// Importar servicios. En este caso se instancia la librería completa.
const loc = require('./05-weather-location');
const api = require('./05-weather-api');

/* Lógica */

/* Ej.1 llamada individual
loc.getLatLng(argv.location)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    });
*/
// Ej.2 llamada a múltiples servicios
// Servicio que realiza la transaccion

const transaction = async(location) => {

    try {
        const coords = await loc.getLatLng(location);
        const temp = await api.getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.address} es de ${temp}`;

    } catch (err) {
        return `No se obtuvo respuesta de temperatura para ${coords.address}`
    }
}

transaction(argv.location)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    });
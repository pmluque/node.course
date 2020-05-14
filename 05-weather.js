/*
 Preliminares
 > npm init
 > npm -i --save yargs

 Objetivo
 > node app -d Madrid España    --> mostrar clima con solo esa dirección


*/

/* Paquetes */
argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'the adress of location to get the weather',
        demand: true
    }
}).argv;
//console.log(argv.location);

/* HTTP status
    200 ok
    404 not found resource
    500 server error
*/

// https://www.npmjs.com/package/axios
axios = require('axios');

// El API tiene las "ñ" como "n"
const location = argv.location.replace(/ñ/gi, "n");
const encodeUrl = encodeURI(location);
console.log(encodeUrl);

const request = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    timeout: 1000,
    headers: { 'x-rapidapi-key': '142f682b75msh3e1055bd876e60cp1677e5jsnb972c87fbb18' }
});

request.get()
    .then(resp => {
        console.log(resp.status, resp.data.Results[0]); // nos quedamos con la primera respuesta. OJO!!! "R"
    })
    .catch(error => {
        console.log(error);
    });
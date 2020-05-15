/* Packages */
const http = require('http'); // disponible por defecto , no requiere npm

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });

    let output = {
            name: 'pedro',
            edad: 46,
            url: req.url
        }
        //res.write('Hola Mundo');
    res.write(JSON.stringify(output));
    res.end();

}).listen(8080);

console.log('Listen on 8080')
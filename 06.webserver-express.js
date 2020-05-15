/* Packages */
const express = require('express');
const app = express();
const hbs = require('hbs');

// Create Middleware
app.use(express.static(__dirname + '/public'));
// express-hbs : templates
//   registrar en el hbs el directorio de los parciales
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// helpers --> empaquetados en helpers.js
require('./hbs/helpers');

// HEROKU variables de entorno
const port = process.env.PORT || 3000;

// 1º 
//
// http://localhost:3000/  --> index.html   : dentro de public  (*) no vale .htm
// http://localhost:3000/home.html          : dentro de public
// http://localhost:3000/home  --> busca servicio | busca carpeat home (dentro podría haber un index.html)

// BOOTSTRAP
// Descargarse distribución y coger css y js y ponerlo en carpeta assets dentro de public
// Linkar el el css:     <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css"> en index.html
// Poner un NAVBAR

// Services
/* Si hay un middleware, el toma el control de las páginas estáticas
app.get('/', (req, res) => {

    // res.send('Hello');

    let output = {
        name: 'pedro',
        edad: 46,
        url: req.url
    };
    res.send(output);

});
*/

/* Crear respuesta a peticiones */
app.get('/', (req, res) => {

    res.render('home', {
        name: 'Pedro Martínez',
        year: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        name: 'Pedro Martínez',
        year: new Date().getFullYear()
    });

});


app.get('/data', (req, res) => {

    res.send('Hello DATA');
});

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});
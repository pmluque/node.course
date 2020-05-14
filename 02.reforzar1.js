console.log('Difeerencia entre var y let');

var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto';
}

var nombre = 'xxxx';
console.log(nombre);


let nombre2 = 'Wolverine';

if (true) { // nuevo scope
    let nombre2 = 'Magneto';
}

nombre2 = 'xxxx';
console.log(nombre2);


console.log('let2');
for (var i = 0; i <= 5; i++) {

}
console.log('Valor1 ' + i);

console.log('let2');
let i2 = '9';
for (let i2 = 0; i2 <= 5; i2++) {

}
console.log('Valor2 ' + i2);

console.log('template-string');
nombrex = 'x';
console.log('Nombre ' + nombrex);
// backticks - templates-literales
console.log(`Nombre ${nombrex}`);

function getNombre() {
    return `${nombrex}`;
}

console.log(`El nombre de ${ getNombre() }`);

console.log('DESTRUCTURACIÓN');
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    },
    // simplificar sintaxis basado en ESMASCRIPT 6
    getName() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());
console.log(deadpool.getName());
// desestructuración
let nn = deadpool.nombre;
let aa = deadpool.apellido;
console.log(nn, aa);
// desestructuración : esto es:
let { nombre: nn2, apellido: aa2, poder: pp2 } = deadpool;
console.log(nn2, aa2, pp2);

console.log('FUNCIONES DE FLECHA');

function sumar2(a, b) {
    return a + b;
}

console.log(`Sumar : ${sumar2(2,5)}`);

let sumar3 = (a, b) => {
    return a + b;
}
console.log(`Sumar : ${sumar3(2,5)}`);

// si es de una sola linea
let sumar4 = (a, b) => a + b;
console.log(`Sumar : ${sumar4(2,5)}`);

function saludar() {
    return 'Hola mundo!';
}
let saludar2 = () => 'Hola mundo!';
console.log(`Saludar1 ${saludar()} y saludar2 ${saludar2()}`);

//let saludar3 = (nombre) => `Hola mundo ${nombre}!`;
// si solo un argumento
let saludar3 = nombre => `Hola mundo ${nombre}!`;
console.log(`Saludar1 ${saludar()} y saludar2 ${saludar2()} y saludar3 ${saludar3('pedro')}`);


let deadpool2 = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // simplificar sintaxis basado en ECMAScript 6
    // convertida a función flecha PERO esto da undefined porque usa this.
    // si usa this, entonces debe usarse como función normal no como función flecha
    getName: () => {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
}

console.log(deadpool2.getName());

console.log('CALLBACK');
setTimeout(function() {
    console.log('Hola mundo !');
}, 2000);

let getUsuarioBy = (id, callback) => {

    let usuario = {
        nombre: 'Pedro',
        //id: id  <- al ser igual puede simplificarse
        id
    };

    if (id === 20) {
        callback(`Error 01: usuario con id ${id} no existe en la bbdd`);
    } else {
        callback(null, usuario);
    }
}

//Primer ejemplo, sin contemplar err
//getUsuarioBy(10, (usuario) => {
//    console.log('Usuario de base de datos: ', usuario);
//});

// Ejemplo con error
getUsuarioBy(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos: ', usuario);
});

getUsuarioBy(10, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos: ', usuario);
});
getUsuarioBy(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos: ', usuario);
});


console.log('CALLBACK: Problemas comunes con callbacks');
// arreglo : simular registros de base de datos
let empleados = [{
        id: 1,
        nombre: 'pedro'
    },
    {
        id: 2,
        nombre: 'silvia'
    },
    {
        id: 3,
        nombre: 'laura'
    }
];

let salarios = [
    { id: 1, salario: 1500 },
    { id: 2, salario: 2500 }
];

let getEmpleado = (id, callback) => {
    /*
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id; // retorna empleado si coinciden id
    });
    */
    // al ser inline se puede simplficar:
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe empleado con ID=${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

//getEmpleado(10, (err, empleado) => console.log(empleado));
//getEmpleado(1, (err, empleado) => console.log(empleado));

let getSalario = (empleado, callback) => {
    console.log(empleado);
    // al ser inline se puede simplficar:
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe salario para empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

/*
getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
        return empleado;
    }
});*/

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        return console.log(`El salario de ${empleado.nombre} es de ${resp.salario}`);
    })
});

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        return console.log(`El salario de ${empleado.nombre} es de ${resp.salario}`);
    })
});

console.log('PROMESAS: trabajo sincrono o asíncrono y luego realizar una tarea adicional');
let getEmpleadoPromesa = (id) => {
    // tiene 2 callback
    return new Promise((resolve, reject) => {
        // resolve : si existe empleado
        // reject  : si no exite
        // además solo puede devolver un objeto, asi que no vale null,object
        // ... si se necesita, debe crearse un objeto {}
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe empleado con ID=${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalarioPromesa = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No existe salario para empleado ${empleado.nombre}`);
            console.log('Otra linea -- es decir, reject no es un return es un callback pero el código continua');
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

/*
getEmpleadoPromesa(3).then(empleado => {
    console.log('EmpleadoPromesa :', empleado);
    getSalarioPromesa(empleado).then(resp => {
        console.log(`El salario es : ${resp.salario}`);
    }, (err) => console.log(err));

}, (err) => {
    console.log(err);
});
*/

// Ahora se busca una estructura para múltiples llamadas a promesas
// y que el código que limpio en caso de error  
/* Si no existe sueldo, el siguiente caso peta
getEmpleadoPromesa(3).then(empleado => {
    console.log('EmpleadoPromesa :', empleado);
    return getSalarioPromesa(empleado);
});
*/
getEmpleadoPromesa(3).then(empleado => {
    console.log('EmpleadoPromesa :', empleado);
    return getSalarioPromesa(empleado); // el siguiente then corresponde a esta promesa
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
}).catch(error => {
    console.log(error);
});

console.log('ASYNC/AWAIT - Promesas en cadena');
let getNombreAA = () => {
    return 'ASYNC/AWAIT - Pedro';
}

console.log(getNombreAA());


let getNombreAA2 = async() => {
    // PROVOCAR UN ERROR: undefined.nombre;
    throw new Error('No existe data');

    return 'ASYNC/AWAIT2 - Pedro';
}

//console.log(getNombreAA2());
/*
getNombreAA2().then(nombre => {
    console.log('getNombreAA2', nombre);
}).catch(error => {
    // console.log('getNombreAA2', error);  -- error incluye toda la trza
    console.log('ERROR getNombreAA2', error);
});
*/

// async-await
let getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data1');
        }, 2000);
    });
}
let datos = async() => {

    let data = await getData();
    // devuelve promesa, pero en vez de .then, uso await
    // Hay que garantizar que devuelva algo !!!
    // El getDAta devuelve una promesa, el await espera hasta que se recoja y así cuando baja de linea ya se puede usar

    return `>>>> Data = ${ data }`;

};

datos().then(data => {
    console.log(data);
});

// VER SIGUIENTE EJERCICIO PARA VER EL ASYNC-AWAIT APLICADO A LLAMADAS DE PROMESAS CONCATENADAS.
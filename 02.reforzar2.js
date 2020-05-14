// Base de datos
// arreglo : simular registros de base de datos
let empleados = [
    { id: 1, nombre: 'pedro' },
    { id: 2, nombre: 'silvia' },
    { id: 3, nombre: 'laura' }
];

let salarios = [
    { id: 1, salario: 1500 },
    { id: 2, salario: 2500 }
];

/*
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe empleado con ID=${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}
*/

// La palabra async ya implica retorno de una promesa y por tanto no hay que hacer un new Promise()
let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe empleado con ID=${id}`);
    } else {
        return empleadoDB;
    }

}

// convertido a async-await
let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No existe salario para empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

/*
getEmpleado(3).then(empleado => {
    console.log('EmpleadoPromesa :', empleado);
    return getSalario(empleado); // el siguiente then corresponde a esta promesa
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
}).catch(error => {
    console.log(error);
});
*/

// Mejora de la estructura anterior
getInfo = async(id) => {
    let empl = await getEmpleado(id);
    let resp = await getSalario(empl);

    return `Empleado ${empl.nombre} tiene salario de ${resp.salario}`;
}


getInfo(2)
    .then(msg => console.log(msg))
    .catch(error => console.log(error));
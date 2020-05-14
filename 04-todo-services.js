const fs = require('fs');

let aList = [];

const saveDB = () => {
    let data = JSON.stringify(aList);
    fs.writeFile(`ficheros/04-data.json`, data, (err) => {
        if (err) reject(err);
    });
}

const loadDB = () => {
    // Como estamos en el lado del servidor, el require permite leerlo 
    // y por ser .json lo convierte automáticamente.
    try {
        aList = require('./ficheros/04-data.json');
    } catch (err) {
        aList = [];
    }
}

const op_new = (task) => {

    loadDB();

    let ops = {
        task,
        complete: false
    }
    aList.push(ops);
    saveDB();

    return ops;
}

const op_list = () => {

    loadDB();
    return aList;
}

const op_update = (task, complete = false) => {
    console.log('task', task, 'complete', complete);
    loadDB();

    let index = aList.findIndex(entry => entry.task === task);
    if (index > -1) {
        aList[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const op_delete = (task) => {
    console.log('op_delete', 'task', task);
    loadDB();

    //let newList = aList.filter( entry => { return entry.task !== task }  );
    let newList = aList.filter(entry => entry.task !== task);

    if (newList.length !== aList.length) {
        aList = newList;
        saveDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    op_new,
    op_list,
    op_update,
    op_delete
}
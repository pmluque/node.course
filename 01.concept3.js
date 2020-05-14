// concept: non-blocking
console.log('Inicio programa concept3');
setTimeout(function() {
    console.log('1 timeout');
}, 3000);

setTimeout(function() {
    console.log('2 timeout');
}, 0);

setTimeout(function() {
    console.log('3 timeout');
}, 0);
console.log('Fin programa concept3');
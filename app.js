const {crearArchivo} = require('./helpers/multiplicar');
const  colors  = require ( 'colors' ) ; 
const arg = require('./config/yargs');

console.clear();
console.log(arg);
console.log('base.yargs: ',arg.base);

crearArchivo(arg.b,arg.l,arg.h)
.then(nombreArchivo => console.log(colors.rainbow(nombreArchivo,'creado')))
.catch(err => console.log(err));


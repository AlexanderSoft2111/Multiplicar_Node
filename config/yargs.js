
//importación de yargs para aplicaciones de consola
const arg = require('yargs')
            //con la opción de option se puede especificar el comando que se quiere utilizar y darle todas las opciones que se necesita
             .option('b', {
                 alias: 'base',
                 demandOption: true,
                 type: 'number',
                 describe: 'Es la base de la tabla de multiplicar'
             })
             .option('l',{
                 alias: 'listar',
                 demandOption: false,
                 type: 'boolean',
                 default: false,
                 describe: 'Muestra la tabla'
             })
             .option('h',{
                 alias: 'hasta',
                 demandOption: false,
                 type: 'number',
                 default: 5,
                 describe: 'Muestra el limite de la tabla'
             })
             //La funcion check valida que los argumentos que se reciben en el comando se pueda pasar por ciertas validaciones
             .check((arg,options) => {
                 if(isNaN(arg.b)){
                     throw 'La base tiene que ser un número';
                 }

                 return true;
             })
             .argv

module.exports = arg
const fs = require('fs');
const  colors  = require ( 'colors' ) ; 
const crearArchivo = async(base = 5,listar = false,hasta) => {

    try {

        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        
        
        if(listar){
            
            console.log('============'.green);
            console.log('Tabla del: '.green, colors.blue(base));
            console.log('============'.green);
            console.log(consola);
        }
        
        //El comando writeFile nos permite crear archivos en la pc, si no se especifica una ruta por defecto creara el archivo en la raiz del proyecto
        fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);

        return `tabla del ${base} creado`
        

    } catch (error) {
        return error
    }


}

module.exports = {crearArchivo}
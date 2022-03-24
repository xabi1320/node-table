const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    let salida = '';
    let consola = '';


    try {
        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base*(i)}\n`;
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow } ${base*(i)}\n`;

        }

        if (listar) {
            console.log('======================='.magenta.bold);
            console.log(' Tabla del: '.blue, base);
            console.log('======================='.magenta.bold);
            console.log(consola);
        }


        fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.cyan;

    } catch (error) {
        throw error;
    }


}
module.exports = {
    crearArchivo
}
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear()

// console.log('Base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(fileWrited => console.log(fileWrited, 'creado'.green))
    .catch(err => console.log(err));


/* destructurando arreglo de parametros de consola
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
 */
// const base = 1;



/* Guardado y creando archivos con File System de node

let salida = '';


for (let i = 0; i < 10; i++) {

    salida += `${base} x ${i+1} = ${base*(i+1)}\n`;
} */

/* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado con exito`);
}) */

/*  Guardado y creando archivos con File System SYNC de node

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt creado con exito`) */
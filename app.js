const { argv } = require('./config/yargs')
const color = require('colors')
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer')

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = crear(argv.descripcion)
        console.log("asd", tarea)
        break;

    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log('======== Por Hacer ========='.green)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
            console.log('============================'.green)
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let eliminado = borrar(argv.descripcion);
        break;

    default:
        console.log('El comando no es reconocido')
}
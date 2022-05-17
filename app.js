// let fs = require ("fs");
// let datos = fs.readFileSync('./tareas.json', "utf-8");
let listaDeTareas= require("./funcionesDeTareas")

switch (process.argv[2]) {
    case "listar":
        console.log("Lista de tareas");
        console.log("-----------------");
        tareas = listaDeTareas.consumir();
        //Reemplazo de for por foreach
        tareas.forEach((tarea, index) => {
            console.log(`${index+1}. ${tarea.titulo}`);
        });
            // for (let i = 0; i < listaDeTareas.length; i++){
            // console.log(listaDeTareas[i].titulo, listaDeTareas[i].estado);
            // }
            //Este es del micro1.
    break;

    case "crear":
        console.log("Creando una tarea");
        let titulo = process.argv[3];
        if (titulo){

            let tarea={
                titulo: titulo,
                estado: "pendiente"
            }

            listaDeTareas.guardarTarea(tarea);
            console.log("Tarea creada");
        } else {
            console.log("No se pudo crear la tarea sin titulo")
        }
    break;

    case "filtrar":
        console.log("Filtrando tareas");
        let estado = process.argv [3];
        if (estado){
            let filtradas= listaDeTareas.leerPorEstado(estado);

            filtradas.forEach((tarea,index) => {
                console.log(`${index +1}. ${tarea.titulo}`);
            });
        } else {
            console.log ("No se pudo filtrar las tareas")
        }
    break;

    case undefined:
        console.log("Atencion - Tienes que pasar una accion");
    break;

    default:
        console.log("No entiendo que quieres hacer");
    break;        
}

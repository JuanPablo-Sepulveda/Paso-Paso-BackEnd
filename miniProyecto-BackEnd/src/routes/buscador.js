const {Router} = require("express")
const buscador= Router()
const controlador=require ("./controladores")
//INVOCAMOS FUNCIONALIDADES DE EXPRESS Y REASIGNAMOS UNA CONSTANTE A NUESTRO GUSTO PARA ENRUTAR LAS FUNCIONALIDADES//


buscador.get('/tareas/buscar', (req, res) => {
  const tareas=controlador.tareas
    const { titulo } = req.query;
    
    if (!titulo) {
        return res.status(400).json({ mensaje: 'Se requiere el parámetro "titulo" para la búsqueda.' });
    }
    
    let tareaEncontrada = null;

    for (const lista of tareas) {
        tareaEncontrada = lista.find(tarea => tarea.titulo && tarea.titulo.toLowerCase() === titulo.toLowerCase());
        if (tareaEncontrada) {
            break;
        }
    }

    if (!tareaEncontrada) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada.' });
    }
    
    res.json(tareaEncontrada);
});// esta funcion se encarga de buscar mediante titulo la tarea y devolver el objeto donde este se encuentre

module.exports=buscador
  

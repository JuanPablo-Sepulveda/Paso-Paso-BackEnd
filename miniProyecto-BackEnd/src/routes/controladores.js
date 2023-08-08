const {Router} = require("express")
const controlador= Router()
//INVOCAMOS FUNCIONALIDADES DE EXPRESS Y REASIGNAMOS UNA CONSTANTE A NUESTRO GUSTO PARA ENRUTAR LAS FUNCIONALIDADES//


let tareas = [];

controlador.get('/tareas', (req, res) => {
  res.json(tareas);
});// Esta funcion nos permite visualizar nuestro objeto de tareas y su contenido

controlador.post('/tareas', (req, res) => {
  const nuevaTarea = req.body;
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});//Esta funcion nos permite crear nuevas tareas, añadirlas al server y verlas en formato JSON

controlador.delete('/tareas/:id', (req, res) => {
  const idTarea = req.params.id;
  tareas = tareas.filter(tarea => tarea.id !== idTarea);
  res.sendStatus(204);
});// esta funcion nos permite borrar un objeto que no deseemos con la id del mismo mediante el metodo ,DELETE

module.exports={controlador,tareas}

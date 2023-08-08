const express = require('express');
const app = express();
const puerto = 3000;
const controlador =require("./src/routes/controladores")
const buscador = require ("./src/routes/buscador")
/* ESTAS LINEAS DE CODIGO SE ENCARGAN DE LLAMAR A TODOS LOS MODULOS/RECURSOS QUE NECESITE*/

app.use(express.json());//Permitimos que los daatos que ingresen se pasen a formato JSON

app.listen(puerto, () => {
  console.log(`Aplicación escuchando en http://localhost:${puerto}`);
});//le informamos al server a que puerto va a estar rscuchando

app.use(controlador.controlador)// invocamos las funciones del modulo "controladores" para alterar el server mediante sus propias funciones

app.use(buscador)//invocamos nuevamente una funcion pero en este caso esta se especializa en buscar mediante el titulo de la tarea el objeto correspondiente

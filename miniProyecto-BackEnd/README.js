//Durante esta etapa aprendiendo BackEnd, si bien soy conciente que no lo tengo dominado ni mucho menos considero que tengo una base solida para implementarlo dentro del capo de manera sencilla por lo menos

/*Como pudieron haber observado algunas de las carpetas simplemente tienen el tema del que aprendi con algun que otro archivo explicando la teoria del framawork/nuevas mecanicas que fui adquiriendo en este paso por el BackEnd.
Por lo tanto deje en la suiguiente carpeta un pequeño proyecto estrictamente BackEnd para que puedan no solo observar si no probar un la creacion de un servidor con sus debidas funciones
*/


/**cabe aclarar que use un programa de interaccion y diseño de api para implementar un JSON al server. Por lo tanto le recomiendo usar el mismo programa o similar para ver en tiempo real los cambios y progresos.Pueden usar alguna como Insomnia, Postman y SoapUI. Yo particularmente uso insomnia asi que la explicacion va mas que nada para este programa pero confio en que con el minimo conocimiento vas a poder verlo en cualquier programa que sepas manejar*/
/*PASO A PASO COMO UTILIZAR
 
PASO 1:nos ubicamos en la termial de la carpeta "miniProyecto-BackEnd"
PASO 2:ingresamos el comando "node app.js"
PASO 3: en nuestro programainsomnia creamos una nueva request
PASO 4:-deberia devolvernos http://localhost:3000- colocamos http://localhost:3000 en nuestro buscador de url de insomnia
PASO 5:mediante el metodo GET ejecutamos la siguiente url --http://localhost:3000/tareas--(esta url nos permitira visualizar el objeto y sus arrays)podemos observar como el array esta vacio, eso es por que todavia no creamos ninguna tarea.
PASO 6:mediante el metodo POST y posicionados en el mismo url --http://localhost:3000/tareas-- vamos a crear un nuevo body en formato .JSON(debajo de post esta la casilla para alterar esto) y colocaremos el siguiente objeto y presionamos send:
[{
  "id": "1",
  "titulo": "Hacer la compra",
  "descripcion": "Comprar frutas, verduras y pan",
  "prioridad": "Alta"
},
{
  "id": "2",
  "titulo": "Pasear al perro",
  "descripcion": "Sacar a pasear a suki",
  "prioridad": "Alta"
},
 {
  "id": "3",
  "titulo": "Cocinar la cena",
  "descripcion": "Saltear vegetales y agregarlos a la pasta",
  "prioridad": "Alta"
},
 {
  "id": "4",
  "titulo": "Planificar el dia de mañana",
  "descripcion": "Organizar las reuniones",
  "prioridad": "Alta"
}]
PASO 7: una vez creada la lista de tareas mediante el metodo GET y con el mismo url podremos visualizar la lista de tareas creada con exito
PASO 8: mediante el metodo GET y la url --http://localhost:3000/tareas/buscar?titulo=Pasear%20al%20perro-- vamos a poder buscar ada una de las tareas que hayamos creado de forma exitosa

formula para buscar las demas tareas http://localhost:3000/tareas/buscar?titulo={titulo}(los espacios van con "%20")
ejemplo:http://localhost:3000/tareas/buscar?titulo=Hacer%20la%20compra

respetar las minusculas y mayusculas de las tareas si no no funcionara




*/
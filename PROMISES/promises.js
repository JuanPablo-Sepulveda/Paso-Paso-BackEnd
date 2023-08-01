// Las promesas son una forma de manejar operaciones asíncronas en programación. Permiten escribir código más limpio y legible cuando trabajamos con tareas que pueden tomar tiempo en completarse, como solicitudes a un servidor, operaciones de lectura/escritura de archivos o cualquier proceso que pueda demorar.

// En lugar de utilizar callbacks anidados para manejar el resultado de una operación asíncrona, las promesas ofrecen una sintaxis más elegante y una estructura más fácil de entender. Las promesas representan un valor que puede estar disponible ahora, en el futuro o nunca. Pueden estar en uno de tres estados:

// Pendiente (pending): La promesa está en curso y aún no se ha resuelto o rechazado.
// Resuelta (fulfilled): La promesa se completó con éxito y devolvió un valor.
// Rechazada (rejected): La promesa encontró un error y devolvió un motivo de rechazo.
// Aquí tienes un ejemplo de una promesa simple en JavaScript:


// Crear una promesa que se resuelva después de un cierto tiempo
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Se resuelve con el número aleatorio si es mayor que 0.5
    } else {
      reject(new Error('El número es menor o igual que 0.5')); // Se rechaza con un error si es menor o igual que 0.5
    }
  }, 1000); // Espera 1 segundo antes de resolver o rechazar
});

// Utilizar la promesa
myPromise
  .then((result) => {
    console.log('Promesa resuelta. Resultado:', result);
  })
  .catch((error) => {
    console.error('Promesa rechazada. Error:', error.message);
  });
// En este ejemplo, creamos una promesa que resuelve un número aleatorio si es mayor que 0.5 o la rechaza con un error si es menor o igual que 0.5. La promesa se resuelve después de 1 segundo (1000 milisegundos). Luego, utilizamos los métodos .then() y .catch() para manejar los casos de éxito y de error respectivamente.

// Métodos de las promesas:

// then(onFulfilled): Este método se llama cuando la promesa se resuelve con éxito. El resultado resuelto se pasa como argumento a la función onFulfilled.
// catch(onRejected): Este método se llama cuando la promesa es rechazada. El motivo del rechazo se pasa como argumento a la función onRejected.
// finally(onFinally): Este método se llama siempre, ya sea que la promesa se resuelva o se rechace. Es útil para realizar acciones comunes, como limpiar recursos o realizar operaciones finales.
// Promise.all(iterable): Este método devuelve una nueva promesa que se resuelve cuando todas las promesas en el iterable proporcionado se resuelven, o se rechaza si alguna de las promesas se rechaza.
// Promise.race(iterable): Este método devuelve una nueva promesa que se resuelve o se rechaza tan pronto como una de las promesas en el iterable proporcionado se resuelve o se rechaza.
// Estos son solo algunos de los métodos disponibles en las promesas en JavaScript. Es importante conocerlos para aprovechar al máximo el poder y la flexibilidad de las promesas en tu código asíncrono.
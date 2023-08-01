const axios =require("axios")

//caso con axios

axios.get("https://rickandmortyapi.com/api/character")
.then(
    (value)=>console.log(value.data), //sucess handler se ejecuta cuando sale todo bien
    (reason)=>console.log(reason)     //error handler se ejecuta cuando sale todo mal



)



//caso con fetch


//a la hora de trabajar con fetch puedo crear mas de un .then() ya que al crear un .then() con fetch estoy creando una nueva promesa. sin importar lo que haga con el metodo fetch el .then( siempre devolvera una promesa ya que son lo que se hace llamar una promesa aninada.) 
/*en este caso podemos ver como [fetch("https://rickandmortyapi.com/api/character")]es una promesa 
y tiene como succes handler a [.then(response=>response.json())] que a su vez se convierte en una promesa conteniendo la respuesta y por lo tanto teniendo otro succeshandler, en este caso [.then((data)=>console.log(data))]  */
fetch("https://rickandmortyapi.com/api/character")
.then(response=>response.json())
.then((data)=>console.log(data))




//-----------------------------------

//promesas puras

const miPromesa =new Promise((resolve,reject)=>{
    resolve="juan"

})

miPromesa.then((response)=> console.log(response))//---> esto retorna "juan" ya que la constante se resuelve y pasa a ser la respuesta de mi .then()

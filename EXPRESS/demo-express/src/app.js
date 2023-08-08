
const express = require("express")
const morgan=require("morgan")
const mainRouter=require("./routes/routes")


const server = express();// creamos el servidor mas facil gracias a la asignacion de express

server.use((req,res,next)=>{
    console.log("estamos pasando por un middleware")

    next();
})

server.use(morgan("dev"))

server.use(express.json())

server.use(mainRouter)


module.exports=server
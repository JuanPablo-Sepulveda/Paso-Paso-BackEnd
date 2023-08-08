const {Router} = require("express")
const apiRouter=require("./apiRouter")

const mainRouter= Router()



mainRouter.get("/",(req,res)=>{
    res.status(200).json({message:"hola mundo"})
})//---> creamos la parte mas importante que vendria a ser un controlador para dominar la ruta

mainRouter.use("/api",apiRouter)



module.exports = mainRouter
const {Router}=require ("express")
const database = require("./database")


const apiRouter=Router()

apiRouter.get("/",(req,res)=>{
    const {name}=req.query
    if(name){
        const searchResult = database.filter((char)=>char.name==name)
        res.status(200).send(searchResult)
    }else{
     res.status(200).send(database)
    }
   
})

apiRouter.get("/:id",(req,res)=>{
    try {
        const {id}=req.params
    const character = database.find((char)=>char.id ==id)
    if(!character) throw error("character does not exist")
    res.status(200).json(character)
    } catch (error) {
        res.status(404).json({error:error.massage})
        
    }
    
})


apiRouter.post("/",(req, res)=>{
    const {name, gender}= req.body
    const newCharacter={
        id:database.length+1,
        name,
        gender,
        species:"human",
        status:"alive"
    }
    database.push(newCharacter)
    res.status(200).json({created: "ok"})

})
// apiRouter.get("/location",(req,res)=>{
//     res.status(200).send("estamos en location")
// })

// apiRouter.get("/episode",(req,res)=>{
//     res.status(200).send("estamos en episode")
// })


module.exports=apiRouter
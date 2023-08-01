const http= require("http")
const fs = require("fs")


http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    const {url}=req;
    console.log("esta llegando una peticion",url)

    if(url ==="/"){
        res.writeHead(200,{"Content-Type":"tex/plain"})
    res.end("Holis!");
    }

    if(url==="/students"){
    res.writeHead(200,{"Content-Type":"application/json"})
    return res.end(
        JSON.stringify([
        {id:1,name:"juan"},
        {id:2,name:"liam"},
        {id:3,name:"pepe"},
        {id:4,name:"manuel"},
        {id:5,name:"adrian"}
        ]))
    }

    if(url==="/html"){
        const html =fs.readFileSync(__dirname+ "/src/index.html","utf-8")
        res.writeHead(200,{"Content-Type":"text/html"})
        return res.end(html)
    }

    if(url === "/template"){
        const html =fs.readFileSync(__dirname+ "/src/template.html","utf-8")
        const nombre="esteban"
        res.writeHead(200,{"Content-Type":"text/html"})
        return res.end(html.replace("{nombre}",nombre))
    }




    res.writeHead(400)
    res.end();
    
 
    


   
})
.listen(3001,"localhost")
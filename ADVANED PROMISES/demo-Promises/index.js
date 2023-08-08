const flag = true


const promiseA = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(flag)resolve ("todo ok")
        else reject("todo mal")
    },1000)
    
})

promiseA//---> se resuelve el valor "todo ok"
.then((value)=>"value")//--->se resuelve al valor "value"
.then((value)=>"holis")//---> se resuelve al valor de "holis"
.then((value)=>console.log(value))//---> se resuelve al valor undefined

//---> un .then( es una promesa que se resuelve al valor que retorna su sucess handler
// ejemplo:
// promiseA.then().then(value=>console.log(value))
// promiseA = promiseB



promiseA
.then((value)=>{
    return "la anterior se resolvio"
})
.catch((reason)=>{
    return "la anterior se rechazo"
}).then((value)=>console.log(value))




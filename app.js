//Usando objeto express
const express = require('express')
//App de express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000
// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) =>{
    res.send("Hello, world!")
})

//respondiedo texto
//localhost:3000/launchx
app.get("/launchx", (req,res) => {
    res.send("Bienvenidos a launchx")
})


//regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hello"}
    res.send(explorer)
})
//Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/mendoza
//req.params = {"explorerName": "mendoza"}
app.get('/explorers/:explorerName', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

//Special routing method
// app.all('/secret', (req,res) => {
//     console.log('Accesing the secret section ...')
//     next() //pass control to the next handler
// })

// con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})


const express = require('express');
const app = express()
const port = 8000

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../public')))

console.log(__dirname,'../public');

app.listen(port, ()=> console.log('Corriendo en el puerto 8000'))


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname ,'./views/home.html'))
})

app.get('/Ofertas', (req, res)=>{
    res.sendFile(path.resolve(__dirname ,'./views/ofertas.html'))
})

app.get('/tiendasOficiales', (req, res)=>{
    res.sendFile(path.resolve(__dirname ,'./views/tiendasOficiales.html'))
})

app.get('/*', (req, res)=>{
    res.send('Not Found')
})


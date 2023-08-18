const express = require('express')
const app = express()
const PORT = 2510
const produtos = []

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/home.html`)
})

app.get('/cadastrarProdutos.html', (req, res) =>{
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
})

app.get('/visualizarProdutos.html', (req, res) =>{
    res.sendFile(`${basePath}/visualizarProdutos.html`)
})

app.post('/user/save', (req, res)=>{
    const {name, preco, descricao} = req.body 
    produtos.push({nome:name, preço:preco, descrição:descricao})
    console.log(produtos)
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
})

app.listen(PORT, () =>{
    console.log(`Servidor ON ${PORT}🐒`)
})
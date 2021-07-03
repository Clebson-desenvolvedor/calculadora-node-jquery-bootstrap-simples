const express = require('express')
const ejs = require('ejs')
const app = express()
const path = require('path')

app.listen(3000, function(err){
    if(err) console.log(err)
    console.log('escutando na porta 3000')
})

app.use(express.static('./public'))
app.set('view engine', 'ejs')


app.get('/', function(req, res){
    res.render('index',{
        title: 'Projeto Calculadora com Jquery, Node e bootstrap'
    })
})
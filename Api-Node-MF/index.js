import express from 'express'
//const express = require('express')

const app = express()
app.use(express.json())

//CRUD -> cREATE, READ, UPDATE, DELETE
const cursos = ['Node Js', 'Java', 'PHP'];

// rotas para todos os cursos
app.get('/cursos', (req, res)=>{
    return res.json(cursos);
})
// Primeiras rotas
app.get('/cursoS/:index', (req, res)=>{
    const {index} = req.params;

    return res.json(cursos [index])
})
//Criaar curos
app.post('/cursos', (req, res)=>{
    const {name} = req.body
    cursos.push(name)
    return res.json(cursos);
})
//Atualizando cursos
app.put('/cursos/:index', (req, res)=>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;
    return res.json(cursos);

})
//delete
app.delete('/cursos/:index', (req, res)=>{
    const {index} = req.params;

    cursos.splice(index, 1)
    return res.json({message: "Deletado"});

})

app.listen(3000)







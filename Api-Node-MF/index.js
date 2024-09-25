import express from 'express'

const app = express()
app.use(express.json())

// Primeiras rotas
app.get('/curso', (req, res)=>{
    res.status(200).json(req.body)
})

app.listen(3000)







import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

const users = []

app.post('/usuarios', async (req, res) => {

     await prisma.user.create({
          data: {
               email: req.body.email,
               name: req.body.nome,
               surname: req.body.sobrenome,
               age: req.body.idade,
               address: req.body.endereço
          }
     })

     res.status(201).json(req.body)

})

app.get('/usuarios', async (req, res) => {

     const users = await prisma.user.findMany()

     res.status(200).json(users)
})


app.put('/usuarios/:id', async (req, res) => {
     console.log(req)

     await prisma.user.update({
          where: {
               id: req.params.id
          },
          data: {
               email: req.body.email,
               name: req.body.nome,
               surname: req.body.sobrenome,       
               age: req.body.idade,
               address: req.body.endereço
          }
     })

     res.status(201).json(req.body)

})
app.delete('/usuarios/:id', async (req, res) => {

     await prisma.user.delete({
          where: {
               id: req.params.id
          }
     })
     res.status(200).json({ messeage: 'Usuário foi de Vasco' })
})



app.listen(3000)
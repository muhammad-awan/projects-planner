const express = require('express')
const bodyParser = require('body-parser')
const projectsRouter = require('./routes/projects')
const server = express()

server.use(bodyParser.json())
server.use('/api', projectsRouter)

const port = 5000
server.listen(port, () =>{
  console.log(`server started on port ${port}`)
})
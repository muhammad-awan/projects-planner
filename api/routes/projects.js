const express = require('express')
const router = express.Router()

const projects = [
  {
    title: 'Pong'
  },
  {
    title: 'Node.js Project'
  }
]

router.get('/projects', (req, res) => {
  res.json(projects)
})

module.exports = router
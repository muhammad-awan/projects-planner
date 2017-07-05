const express = require('express')
const router = express.Router()

const projects = [
  {
    title: 'Pong',
    skills: ['game programming', 'design']
  },
  {
    title: 'Node.js Project',  
    skills: ['Node', 'React', 'Express']
  }
]

router.get('/projects', (req, res) => {
  res.json(projects)
})

module.exports = router
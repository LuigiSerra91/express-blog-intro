const express = require('express')
const app = express()
app.use(express.static('public'))
const blogControllers = require('./controllers/blogControllers')
const cors = require('cors')
const host = 'http://127.0.0.1'
const port = 3000


app.get('/index.html', (req, res) => {

  res.send('<h1>Benvenuto nel mio blog </h1>')
})

app.use(cors())
app.get('/ciao', (req, res) => {
    
    
    res.send('<img src="/img/carbonara.jpeg" alt="pizza vegana">')
  })
  

app.get('/posts', blogControllers.index) 







app.listen(port, () => {
  console.log(`example app listening on ${host}:${port}`);
  
})
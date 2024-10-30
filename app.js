const express = require('express')
const app = express()
app.use(express.static('public'))
const blogControllers = require('./controllers/blogControllers.js')
const host = 'http://127.0.0.1'
const port = 3000



app.listen(port, () => {
    console.log(`example app listening on ${host}:${port}`);
    
})

app.get('/ciao', (req, res) => {
    
    const markup = `
      <h1>Resturant</h1>
      <img src="/img/carbonara.jpeg" alt="pizza vegana">
    `
    res.send(markup)
  })
  

app.get('/blog', blogControllers.index) 



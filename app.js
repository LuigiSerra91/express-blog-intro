const express = require('express')
const app = express()
app.use(express.static('public'))
const blogControllers = require('./controllers/blogControllers')

const host = 'http://127.0.0.1'
const port = 3000



app.listen(port, () => {
    console.log(`example app listening on ${host}:${port}`);
    
})

app.get('/ciao', (req, res) => {
    
    
    res.send('<img src="/img/carbonara.jpeg" alt="pizza vegana">')
  })
  

app.get('/blog', blogControllers.index) 


app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname,'public', 'index.html'));
    
  })
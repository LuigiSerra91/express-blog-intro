const express = require('express')
const app = express()
app.use(express.static('public'))
const blogControllers = require('./controllers/blogControllers.js')

const host = 'http://127.0.0.1'
const port = 3000



app.listen(port, () => {
    console.log(`example app listening on ${host}:${port}`);
    
})


  

app.get('/blog', blogControllers.index) 



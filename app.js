const express = require('express')
const app = express()
app.use(express.static('public'))
const host = 'http://127.0.0.1'
const port = 3000



app.listen(port, () => {
    console.log(`example app listening on ${host}:${port}`);
    
})

app.get('/', (req, res) =>{

    res.send('<h1>Benvenuto nel mio blog</h1>')
})
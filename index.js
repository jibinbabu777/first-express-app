const express = require('express')

const app = express()

app.all('/', (req, res)=>{
    console.log('Request', req);
    console.log('Response', res);
    res.send('Im Up')
})

const PORT = 5000

app.listen(PORT, ()=>{
    console.log('Server is running at port 5000')
})
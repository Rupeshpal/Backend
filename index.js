require('dotenv').config()
const express = require('express')

const app = express()
const port= process.env.PORT||3000
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/profile',(req,res)=>{

    res.send("This is my profile section")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
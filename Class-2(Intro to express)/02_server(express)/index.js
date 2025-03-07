const express = require('express');

const app = express()
const PORT = 8001;
app.get("/", (req, res) => {
    return res.send('this is home page ')
})



app.get("/about", (req, res) => {
    return res.send('this is about page ')
})

app.get("/products", (req, res) => {
    console.log(req.query);
    return res.send('this is products page '+ req.query.shoes)
})

app.listen(PORT, ()=>{
    console.log("server started at " + PORT);
    
})
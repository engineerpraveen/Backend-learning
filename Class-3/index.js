const express = require('express')
const fs = require('fs');
const PORT = 8002;
const app = express();
const products = require("./MOCK_DATA.json");

// Middleware : inbuilt
// for urlencoded data
app.use(express.urlencoded())

// for JSON data
app.use(express.json())

// get method
app.get("/", (req, res) => {
    res.send("Welcome to our shop");
})

// hybrid Api model for clint like browser, mobile, smart devices etc
// app.get("/api/products", (req, res) => {
//     res.json(product);
// })

// this is called server side render : In server side rendering js runs on server and only send html structure to client
app.get('/api/products', (req, res) => {
    const html = `<ul> ${products.map(items => `<li>${items.product_name}</li>`)}</ul>`
    res.send(html)
})

// Route parameter
app.get('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);
    res.send(product);
})

// post Method for creation
app.post('/api/products', (req, res) => {
    console.log(req.body);
    const newData = req.body;
    products.push({ id: products.length + 1, ...newData })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(products), (err, data) => {
        if (err) {
           return res.send(err)
        }
        return res.send({ status: 'successfully created', id: products.length })
    })
})

// put Method for update
app.put('/api/products/:id', (req, res)=>{
    const id = Number(req.params.id);
    const body = req.body;
    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {id: Number(id), ...body}
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(products), (err, data)=>{
        if (err) {
            return res.status(500).json({status:'error', message:"error"})
        }
        return res.json({status:"success", id:id})
    })
})

//delete Method 
app.delete('/api/products/:id', (req,res)=>{
    const id = Number(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    products.splice(productIndex, 1)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(products), (err, data)=>{
        if(err){
            return res.status(500).json({status:"error", message:"error"})
        }
        return res.json({status:"Deleted successfully"});
    })

})

app.listen(PORT, () => {
    console.log("Server started at ", PORT);

})
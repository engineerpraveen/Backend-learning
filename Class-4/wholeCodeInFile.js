const express = require('express')
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const products = require("./MOCK_DATA.json");
const PORT = 8003;

// Middleware : inbuilt
// for urlencoded data
app.use(express.urlencoded())

// for JSON data
app.use(express.json())

// DB Connection
mongoose.connect('mongodb+srv://vaishnavpraveen001:gGTcu6WauUCRm9TG@cluster0.ojmdo.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("DB Connected");
}).catch((err => {
    console.log(err);
}))

const productSchema = new mongoose.Schema({
    product_name :{
        type:String,
        required: true
    },
    product_price:{
        type :String,
        required:true
    },
    isInStock:{
        type :Boolean,
        required: true
    },
    category:{
        type : String,
        required:true
    }
},{
    timestamps:true
})

const  ProductModel = mongoose.model('products', productSchema);

// get method
app.get("/", (req, res) => {
    res.send("Welcome to our shop");
})

app.get("/api/products", async(req, res) => {
    const allProducts = await ProductModel.find({isInStock:true});
    const html = `<ul>${allProducts.map(product => `<li>${product.product_name}</li>`)}</ul>`;
    res.send(html);
})

// this is called server side render : In server side rendering js runs on server and only send html structure to client
// app.get('/api/products', async(req, res) => {
//     const allProducts = await ProductModel.find({})
//     const html = `<ul> ${allProducts.map(items => `<li>${items.product_name}</li>`)}</ul>`
//     res.send(html)
// })

// Route parameter
app.get('/api/products/:id', async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    res.send(product);
})

// Create AB Entry
app.post("/api/products", async(req, res)=>{
    const product = await ProductModel.create({
        product_name : req.body.product_name,
        product_price: req.body.product_price,
        isInStock:req.body.isInStock,
        category:req.body.category
    })
    console.log(product);
    return res.status(201).json({message:'product created'})
})

// put Method for update
app.put('/api/products/:id', async(req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({message:"Product Updated"})
})

//delete Method 
app.delete('/api/products/:id', async(req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Product Deleted"})
})

app.listen(PORT, () => {
    console.log("Server started at ", PORT);

})
const express = require('express')
const mongoose = require('mongoose');
const productRoutes = require('../Class-4/routes/productRoutes')
const app = express();
const PORT = 8003;

// Middleware : inbuilt
// for urlencoded data
app.use(express.urlencoded());

// for JSON data
app.use(express.json()) 

// DB Connection
mongoose.connect('mongodb+srv://vaishnavpraveen001:gGTcu6WauUCRm9TG@cluster0.ojmdo.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("DB Connected");
}).catch((err => {
    console.log(err);
}))

// use routes 
app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    console.log("Server started at ", PORT);

})
const mongoose = require('mongoose');
// Product Schema
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

const  ProductModel = mongoose.model('products', productSchema)

module.exports =  ProductModel


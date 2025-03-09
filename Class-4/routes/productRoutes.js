const express = require('express')
const productCountroller = require('../controllers/productControllers')

const router = express.Router();

router.get("/api/products", productCountroller.getAllProducts)

// Create AB Entry
router.post("/api/products", productCountroller.cerateProduct)

// Route parameter
router.get('/api/products/:id', productCountroller.getProductById)

// put Method for update
router.put('/api/products/:id', productCountroller.updateProduct)

//delete Method 
router.delete('/api/products/:id', productCountroller.deleteProduct)


// app.get("/api/products",productCountroller.getAllProducts )

// // Route parameter
// app.get('/api/products/:id', productCountroller.getProductById)

// // Create AB Entry
// app.post("/api/products", productCountroller.cerateProduct )

// // put Method for update
// app.put('/api/products/:id',productCountroller.updateProduct )

// //delete Method
// app.delete('/api/products/:id',productCountroller.deleteProduct )

module.exports = router;
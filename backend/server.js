const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// use cors middleware
app.use(cors())

// database connection
mongoose
    .connect("mongodb://localhost:27017/shop_db")
    .then(() => {
        app.listen(3000, () => {
            console.log('Server connected on port 3000 with mongo db');
        })
    })
    .catch((error) => console.log(error))


// test endpoint
app.get('/', (req, res) => {
    console.log("Hello World")
    res.send("Working ")
})



// mongoose schema
const Schema = mongoose.Schema
const productSchema = new Schema({
    id: Number,
    name: String,
    prices: [String],
    image: String,
    category: String,
    width: String,
    height: String
})

// mongoose model
const Product = mongoose.model('Product', productSchema)

// product endpoint
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(err) {
        console.error(err)
        res.status(500).json({errorMessage: "Error fetching products"})
    }
})



const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

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



// mongoose schema setup
const Schema = mongoose.Schema

// products schema
const productSchema = new Schema({
    id: Number,
    name: String,
    prices: [String],
    image: String,
    category: String,
    width: String,
    height: String
})

// products mongoose model
const Product = mongoose.model('Product', productSchema)

// product endpoint
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(err) {
        console.error(err)
        res.status(500).json({ errorMessage: "Error fetching products" })
    }
})





// cart schema
const cartSchema = new Schema({
    id: Number,
    name: String,
    prices: [String],
    image: String,
    category: String
})

// cart mongoose model
const Cart = mongoose.model('Cart', cartSchema)

// cart endpoint - GET request to fetch cart items



// cart endpoint - POST



// customer details schema
const customerDetailsSchema = new Schema({
    id: Number,
    email: String,
    password: String
})

// customer details model
const CustomerDetails = mongoose.model('CustomerDetails', customerDetailsSchema)





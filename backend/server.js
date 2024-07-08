const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

// use cors middleware
app.use(cors())

// use body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

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
app.get('/cart', async (req, res) => {
    try {
        const cartItems = await Cart.find()
        res.json(cartItems)
    } catch(err) {
        console.error(err)
        res.status(500).json({ errorMessage: "Error fetching cart items" })
    }
})


// cart endpoint - POST
app.post('/cart', async (req, res) => {
    console.log("Adding to users cart in database")
     try {
      //  const cartItems = await Cart.find()
      //   res.json(cartItems)

      // Figure what is the actual item 1.

      const cartItem = await Cart.findOne({
        id: req.body.id
      })

      console.log("DEBUG FROM FETCH")
      console.log(cartItem);

      // Create an iterm in the cart that has the same values.

      const newCartItem = new Cart({
        id: req.body.id,
        name: req.body.name,
        prices: req.body.prices,
        image: req.body.image,
      });
      
      

      // save to database
      newCartItem.save();

         
     } catch(err) {
        console.error(err)
         res.status(500).json({ errorMessage: "Error fetching cart items" })
    }
})


// customer details schema
const customerDetailsSchema = new Schema({
    id: Number,
    email: String,
    password: String
})

// customer details model
const CustomerDetails = mongoose.model('CustomerDetails', customerDetailsSchema)





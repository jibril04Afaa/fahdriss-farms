const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log("Hello World")
    res.send("Working")
})

// Listening on port 3000
app.listen(3000)
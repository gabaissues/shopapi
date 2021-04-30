const mongoose = require('mongoose')

const product = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

module.exports = { product }
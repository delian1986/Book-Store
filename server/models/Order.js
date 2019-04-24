const mongoose = require('mongoose')

let orderSchema = mongoose.Schema({
    creator: { type: mongoose.Schema.Types.String },
    books: [],
    date: { type: mongoose.Schema.Types.Date, default: Date.now },

})

let Order = mongoose.model('Order', orderSchema)

module.exports = Order

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    menu: [{
        type: ObjectId,
        ref: 'Product'
    }]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant


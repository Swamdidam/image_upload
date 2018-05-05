
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema   = new Schema({

    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    },
    category: {type: String},
    product: {type: String},
    model: {type: String},
    brand: {type: String},
    size: {type: String},
    price: {type: String},
    description: {type: String},
    color : {type: String},
    quantity: {type: Number},
    img1: { data: Buffer, contentType: String },
    uploadDate: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Product',ProductSchema);
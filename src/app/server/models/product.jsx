import { bool } from "sharp";

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, "product Id oruulna uu"],
        unique: true,
        minlength: 4
    },
    productName: {
        type: String,
        required: [true, "product ner oruulna uu"],
    },
    productPrice: {
        type: Number,
        required: [true, "une oruulna uu"],
    },
    productLocation: {
        type: String,
        required: [true, "bairshil oruulna uu"],
    },
    productOption: {
        type: String,
        required: [true, "zogsooltoi eseh oruulna uu"],
    },
    productWifi: {
        type: String,
        required: [true, "product ner oruulna uu"],
    },
    productAvailable: {
        type: Boolean,
        required: [true, "Book hiih bolomjtoi eseh"],
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const product = mongoose.models.product || mongoose.model("product", productSchema);

export default product;
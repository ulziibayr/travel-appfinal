
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        required: [true, "Category Id oruulna uu"],
        unique: true,
        minlength: 4
    },
    categoryName: {
        type: String,
        required: [true, "Category ner oruulna uu"],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
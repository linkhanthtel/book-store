import mongoose, { model } from "mongoose";
const schema = mongoose.Schema;

const bookSchema = schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Book = mongoose.model("Book", bookSchema);


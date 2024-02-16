import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Post books to database
router.post('/', async (req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.year
        ) {
            res.status(400).send({ message: "All fields must be filled"});
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };
        const book = await Book.create(newBook);
        return res.status(200).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message : error.message});
    }
})

//Get books from database
router.get('/', async (req,res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send({
            count : books.length,
            data: books
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

//Get one book with ID from database
router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message})
    }
})

//Update one book with ID
router.put('/:id', async(req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.year
        ) {
            res.status(400).send({message : "Please fill all the fields to update"})
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(400).send({message : "Book not found"});
        }
        return res.status(200).send({message : "Book Updated Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

//Delete book with ID
router.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            res.status(400).send({message : "Book not found"})
        }
        res.status(200).send({message : "Book Deleted Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message})
    }
})

export default router;
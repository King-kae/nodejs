const express = require('express');
const bookRoute = express.Router()

const bookModel = require('../model/bookModel')


// CRUD routes

bookRoute.get('/', (req, res) => {
    console.log('wee hereee')
    bookModel.find({})
    .then((books) => {
        res.render(books)
    }).catch((err) => {
        res.status(500).send(err)
    })
    
})

bookRoute.get('/books/:id', (req, res) => {
    const id = req.params.id
    
    bookModel.findById(id)
    .then((book) => {
        res.status(200).send(book)
    }) .catch((err) => {
        res.status(500).send(err)
    })
})

// Create a new book
bookRoute.post('/', (req, res) => {
    const book = req.body
    bookModel.create(book)
    .then((books) => {
        res.status(200).send({
            message: 'Book created successfully',
            data: books
        })
    }).catch((err) => {
        res.status(500).send(err)
    })
})

bookRoute.put('/:id', (req, res) => {
    const id = req.params.id
    const book = req.body
    console.log('Updating book with id' + id)

    bookModel.findByIdAndUpdate(id, book, { new: true })
        .then((book) => {
            res.status(200).send(book)
        }).catch((err) => {
            res.status(500).send(err)
        })
})

bookRoute.delete('/:id', (req, res) => {
    const id = req.params.id

    console.log('Deleting book with id' + id)

    bookModel.findByIdAndDelete(id)
        .then((book) => {
            res.status(200).send({
                message: 'Book deleted successfully'
            })
        }).catch(err => {
            res.status(500).send(err)
    })
})

module.exports = bookRoute
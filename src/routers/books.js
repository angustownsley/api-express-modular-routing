// Import data here...
const express = require('express')
const router = express.Router()
const { getAllBooks, addBook, getBookById, deleteBookById, updateBookById } = require('../controllers/books')

// Write routes here...
router.get('/', getAllBooks)

router.post('/', addBook)

router.get('/:id', getBookById)

router.delete('/:id', deleteBookById)

router.put('/:id', updateBookById)

module.exports = router
const express = require('express')
const router = express.Router()
 
const blogControllers = require('../controllers/blogControllers.js')

router.get('/:id', blogControllers.show)
router.get('/', blogControllers.index)
module.exports = router
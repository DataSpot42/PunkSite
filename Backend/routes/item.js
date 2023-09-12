const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getPunk)
router.get('/item/:id', itemsController.getPunk)
router.post('/item', itemsController.createPunk)
router.patch('/items/:id', itemsController.editPunk)
router.delete('/items/:id', itemsController.deletePunk)
module.export = router
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/',userController.view)
router.post('/',userController.find)
router.delete('/delete/:id',userController.delete)
router.get('/adduser', userController.form)
router.post('/adduser', userController.create)
router.get('/edituser/:id', userController.edit)
router.put('/edituser/:id', userController.update)
router.get('/viewuser/:id', userController.viewall)

module.exports = router
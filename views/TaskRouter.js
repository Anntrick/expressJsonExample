const express = require('express')
const router = express.Router()

const { getAll, getById, newTask, editTask, deleteTask } = require('../controllers/TaskController')

router.get('/', getAll)
router.get('/getById/:id', getById)
router.post('/newTask', newTask)
router.put('/editTask/:id', editTask)
router.delete('/deleteTask/:id', deleteTask)

module.exports = router
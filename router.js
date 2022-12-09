const router = require('express').Router()


const UserRouter = require('./views/UserRouter')
const TaskRouter = require('./views/TaskRouter')


router.use('/user', UserRouter)
router.use('/task', TaskRouter)

module.exports = router
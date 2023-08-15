const { Router } = require('express')
const router = Router()
const {
  getUsersHandler,
  registerUserHandler
} = require('../handlers/usersHandler')

router.get('/users',getUsersHandler)
router.post('/users',registerUserHandler)

module.exports = router
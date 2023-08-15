const { Router } = require('express')
const users = require('./usersRoutes')

const routers = Router()

routers.use('/auth',users)

module.exports = routers
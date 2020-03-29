const express = require('express')
const ongsRoutes = require('./ongs.js')
const incidentsRoutes = require('./incidents.js')
const sessionsRoutes = require('./sessions.js')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('kk eae men')
})
routes.use('/ongs', ongsRoutes)
routes.use('/incidents', incidentsRoutes)
routes.use('/sessions', sessionsRoutes)

module.exports =  routes
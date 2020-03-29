const express = require('express')
const controller = require('../controllers/session')

const routes = express.Router()

routes.post('/', async (req, res) => {
    const { id } = req.body

    const ong = await controller.create(id)
    return res.json(ong)
})

module.exports = routes
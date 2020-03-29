const express = require('express')
const controller = require('../controllers/ong')


const routes = express.Router()

routes.post('/', async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body

    const id = await controller.create(name, email, whatsapp, city, uf)
    return res.json({ id })
})

routes.get('/', async (req, res) => {
    const ongs = await controller.getAll()

    return res.json(ongs)
})

routes.delete('/:id', async (req, res) => {
    const idToDelet = req.params.id 
    const deletedIds = await controller.deleteItem(idToDelet)

    return res.json(deletedIds)
})

module.exports = routes
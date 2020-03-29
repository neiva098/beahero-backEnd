const express = require('express')
const controller = require('../controllers/incidents')


const routes = express.Router()

routes.post('/', async (req, res) => {
    const { title, description, value } = req.body
    const ong_id = req.get('authorization')

    const id = await controller.create(title, description, value, ong_id)
    return res.json({ id })
})

routes.get('/', async (req, res) => {
    const { page = 1 } = req.query
    const incidents = await controller.getAll(page)

    return res.set('X-Total-Count', incidents.count).json(incidents.incidents)
})

routes.delete('/:id', async (req, res) => {
    const idToDelet = req.params.id
    const ong_id = req.get('authorization')

    const deletedIds = await controller.deleteItem(idToDelet, ong_id)

    return res.json(deletedIds)
})

routes.get('/query/', async (req, res) => {
    const ong_id = req.get('authorization') || 'INVALID'
    const { title, description, id, value } = req.query

    const incidents = await controller.query({title, description, id, value, ong_id })

    return res.json(incidents)
})


module.exports = routes
const connection = require('../database/connection')
const uuid = require('uuid')

const create = async (name, email, whatsapp, city, uf) => {
    const id = uuid.v4()

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return id
}

const getAll = async () => {
    const ongs = await connection('ongs').select('*')

    return ongs
}

const deleteItem = async (id) => {
    const deleteResult = await connection('ongs').delete().where('id', id)

    return deleteResult
}

module.exports = {
    create,
    getAll,
    deleteItem
}
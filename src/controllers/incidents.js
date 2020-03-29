const connection = require('../database/connection')
const queryHandler = require('../utils/query')

const create = async (title, description, value, ong_id) => {
    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    })

    return id
}

const getAll = async (page) => {
    const num_registers = 5
    const [count] = await connection('incidents').count()
    const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(num_registers).offset((page - 1) * num_registers).select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])

    return {
        count: Object.values(count)[0],
        incidents,
    }
}

const deleteItem = async (id, ong_id) => {
    const deleteResult = await connection('incidents').delete().where('id', id).where('ong_id', ong_id)

    return deleteResult
}

const query = async (queryParams) => {
    const incidents = await connection('incidents').where((builder) => queryHandler(queryParams, builder)).select('*')

    return incidents
}

module.exports = {
    create,
    getAll,
    deleteItem,
    query
}
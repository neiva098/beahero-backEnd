const connection = require('../database/connection')

const create = async (id) => {
    const ong = await connection('ongs').where({ id }).select('name').first()

    return ong
}

module.exports = {
    create,
}
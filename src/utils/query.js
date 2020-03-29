const queryHandler = (query, actualQuery) => {
    const localQuery = { ...query }

    for (propertie in localQuery) {
        if (!localQuery[propertie]) {
            delete localQuery[propertie]
            continue
        }
        if (localQuery[propertie].includes('&lt')) {
            actualQuery = actualQuery.where(propertie, '<', JSON.parse(localQuery[propertie])['&lt'])
            delete localQuery[propertie]
            continue
        }
        if (localQuery[propertie].includes('&gt')) {
            actualQuery = actualQuery.where(propertie, '>', JSON.parse(localQuery[propertie])['&gt'])
            delete localQuery[propertie]
            continue
        }
    }

    actualQuery.where(localQuery)
}

module.exports = queryHandler
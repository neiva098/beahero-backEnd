const removeUndefinedProperties = (object) => {
    const localObject = { ... object }

    for(propertie in localObject) {
        if (!localObject[propertie]) delete localObject[propertie]
    }

    return localObject
}

module.exports = removeUndefinedProperties
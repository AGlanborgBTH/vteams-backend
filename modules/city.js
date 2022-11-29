/*
    Main file for functions regarding CRUD for city collection

    Imports:
        imports of all city-CRUD-modules

    Exports:
        export of all city-CRUD-modules as an object
*/

const cityGet = require('./cityModules/get');
const cityPut = require('./cityModules/put');


module.exports = {
    cityGet,
    cityPut,
}


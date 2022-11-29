/*
    Main file for functions regarding fetching cities from cities-collection
*/
const ObjectId = require('mongodb').ObjectId;
const database = require('../../database')

const get = {
    all: async () => {
        const db = await database.getDb("Cities");
        const result = await db.collection.find().toArray();
        await db.client.close();
        return result;
    }
}

module.exports = get

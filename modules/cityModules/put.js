/*
    Main file for functions regarding updating cities from cities-collection
*/

const ObjectId = require('mongodb').ObjectId; 
const database = require('../../database')

const put = {
    one: async (id) => {
        const db = await database.putDb("Cities");
        const result = await db.collection.UpdateOne({"_id": ObjectId(`${id}`)});
        await db.client.close();
        return result;
    }
}

module.exports = put
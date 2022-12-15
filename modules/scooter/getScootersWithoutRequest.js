const { Scooters } = require("../../models/Scooters");

async function getAllScootersSocket(socket) {
    try {
        const data = await Scooters.find();
        socket.emit("sendAllScooters", data );
      } catch (error) {
        return error
      }
}


module.exports = { getAllScootersSocket };
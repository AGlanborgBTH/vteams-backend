const { Scooters } = require("../../models/Scooters");

async function getAllScootersSocket(socket) {
    try {
        const data = await Scooters.find();
        socket.emit("scooters", {data: data} );
      } catch (error) {
        return error
      }
}

module.exports = { getAllScootersSocket };
const { Scooters } = require("../../models/Scooters");

async function getAllScootersSocket(socket) {
  const data = await Scooters.find();
  socket.emit("scooters", { data: data });

  return undefined
}

module.exports = { getAllScootersSocket };
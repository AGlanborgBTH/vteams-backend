/*
    Main file for version 1 of API

    This file will contain:
        Ports for CRUD of main collections

    Express:
        "/users"
            Leading to './v1Routes/user'
        "/scooters"
            Leading to './v1Routes/scooters'
        "/cities"
            Leading to './v1Routes/cities'
        "/logs"
            Leading to './v1Routes/logs'
        "/login"
            Leading to './v1Routes/login'
*/

const cities = requrie("./v1Routes/city.js")
const users = requrie("./v1Routes/user.js")
const scooters = requrie("./v1Routes/scooter.js")
const login = requrie("./v1Routes/login.js")

app.use("/cities", cities);
app.use("/users", users);
app.use("/scooters", scooters);
app.use("/login", login);
/*
    Main file for actions for endpoint 'city'

    This file will contain:
        Ports for CRUD of cities-collection

    Imports:
        object from '../../modules/city'

    Express:
        "/"
            GET
                fetch all cities

        "/:id"
            GET
                fetch city by :id

            PUT
                update city by :id

                Body:
                    cityId

                Middleware:
                    Check for project manager identity
*/
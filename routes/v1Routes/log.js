/*
    Main file for actions for endpoint 'logs'

    This file will contain:
        Ports for CRUD of logs-collection

    Imports:
        object from '../../modules/logs'

    Express:
        "/"
            GET
                fetch all logs from collection

                Middleware:
                    Check for valid admin token

            POST
                add log (row) to collection

                Body:
                    recordId
                    description

                Middleware:
                    Check for valid token

        "/:id"
            GET
                fetch all logs by user-:id from collection

                Middleware:
                    Check for valid token
                    Check for login identity equals user-:id
*/
/*
Main file for actions for endpoint 'user'

This file will contain:
    Ports for CRUD of users-collection

Imports:
    object from '../../modules/user'

Express:
    "/"
        GET
           fetch all users without wallet-column

            Middleware:
                Check for valid admin token

        POST
            add user (row) to collection

            Body:
                email
                firstname
                lastname
                password
                admin = 0
                wallet = 0

    "/:id"
        GET
            fetch user by user-:id

            Middleware:
                Check for valid token

        DELETE
            delete user by user-:id

            Middleware:
                Check for valid token

        PUT
            update user by user-:id

            Middleware:
                Check for valid token
*/
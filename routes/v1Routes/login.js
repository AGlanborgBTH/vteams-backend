/*
Main file for actions for endpoint 'login'

This file will contain:
    Ports for loging in users

Imports:
    object from '../../modules/login'

Express:
    "/:id"
        POST
            Check for valid email and password
            Return token, email and user-id

            Body:
                email
                password
*/
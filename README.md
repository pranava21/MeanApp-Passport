# MeanAppPassport

This project is to test out the authentication using Passport.js to login and logout.

## Development server

Run `ng serve` for a dev server. Navigate to `http://127.0.0.1:4200/`. The app will automatically reload if you change any of the source files.
Because the authentication is done by Passport.js, the host must not be localhost.

## Endpoints

The Express server is running on port 3000.
The End Points used thus far are:
	1. /login: Used to authenticate and log the user in.
	2. /user: To view the dashboard. It also makes sure the user is logged in, other wise error is thrown.
	3. /register: To register a new User.

The database used is MongoDB for the application.

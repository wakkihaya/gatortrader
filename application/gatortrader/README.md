# GatorTrader Express Application

The GatorTrader express app was created with the following steps:

### (01) Create "gatortrader" subdirectory in the "application" directory and move into "gatortrader".

### (02) Install express globally:
	`<npm install -g express>`

### (03) Install express generator globally:
	`<npm install -g express-generator>`

### (04) Create a ".gitignore" file and populate it with the following lines:
	`<node_modules>`
	`<.DS_Store>`

### (05) Create the following subdirectories:
	* controllers
	* helpers
	* middleware
	* tests

### (06) The gatortrader subdirectory should now look like this:
	* .
	* ..
	* app.js
	* bin/
	* controllers/
	* .gitignore
	* helpers/
	* middlewares/
	* models/
	* package.josn
	* public/
	* README.md
	* routes/
	* tests/
	* views/

### (07) Move into "models" and install mysql:
	`<sudo apt-get update>'
	`<sudo apt-get install mysql-server>'

### (08) Make a note of the root password you choose to use.


# Express Project Structure

This project root directory shall contain all code for the GatorTrader express project separated into subfolders.
The structure contains the following files and subdirectories:

## Root Project Files

### app.js
Initializes the GatorTrader express app and glues everything together.

### package.json
Remembers all pakages that your app depends on and their versions.

### .gitignore
Used to select which files git should ignore for tracking.

### README.md
Information about this project, install instructions, etc.

## Root Project Subdirectories

### bin/
Contains the executable file that starts the app.

### controllers/
Responsible for taking the inputs from the routes and invoking the appropriate actions to execute.

### helpers/
Code and functionality to be shared by different parts of the project.

### middlewares/
Express middlewares that process the incoming requests before handling them down to the routes.

### models
Represents data, implements business logic, and handles storage.

### public/
Contains all static files like images, styles, and javascript.

### routes/
Responsible for initializing and associating route with controllers.

### views/
Provides templates which are rendered and served by your routes.

### tests/
Tests everything which is in the other subdirectories.

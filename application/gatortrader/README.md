# GatorTrader Express Application

## Creating the GatorTrader Express Application

### 1. Create "gatortrader" subdirectory in the "application" directory and move into "gatortrader".

### 2. Install express globally:
```
npm install -g express
```

### 3. Install express generator globally:
```
npm install -g express-generator
```

### 4. Create a ".gitignore" file and populate it with the following lines:
```
node_modules
.DS_Store
```

### 5. Create the following subdirectories:
* controllers
* helpers
* middleware
* tests

### 6. The gatortrader subdirectory should now look like this:
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

## Creating the MYSQL database

### 1. Move into `models/` and install mysql:
```
sudo apt-get update
sudo apt-get install mysql-server
```

### 2. Make a note of the root password you choose to use.

### 3. Check the mysql version with this command:
```
mysql --version
```
You should see output like this:
```
Ver 14.14 Distrib 5.7.27, for Linux (x86_64) using  EditLine wrapper
```
If your Distrib version number is less than 5.7.6, then you should initialize the data directory by running:
```
sudo mysql_install_db
```

### 4. Check the mysql service status with this command:
```
service mysql status
```
If the output is `Unknown job: mysql`, then start the mysql service with this command:
```
sudo service mysql start
```

### 5. Login into the mysql cli with this command:
```
mysql -u root -p
```


# Express Project Structure

This project root directory shall contain all code for the GatorTrader express project separated into subfolders.
The structure contains the following root files and subdirectories:

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

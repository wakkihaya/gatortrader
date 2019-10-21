# GatorTrader Express Application

## Creating the GatorTrader Express Application

### 1. Create the `gatortrader/` root directory in the `application/` directory and move into `gatortrader/`.

### 2. Install express globally:
```
npm install -g express
```

### 3. Install express generator globally:
```
npm install -g express-generator
```

### 4. Create a `.gitignore` file and populate it with the following lines:
```
node_modules
.DS_Store
```

### 5. Create the following subdirectories:
```
controllers/
helpers/
middlewares/
models/
tests/
```

### 6. The `gatortrader/` root directory should now look like this:
```
.
..
app.js
bin/
controllers/
.gitignore
helpers/
middlewares/
models/
package.json
public/
README.md
routes/
tests/
views/
```

## Creating the MYSQL database

### 1. Install the mysql module from your root directory:
```
npm install mysql
```

### 2. Move into `models/` and install mysql-server:
```
sudo apt-get update
sudo apt-get install mysql-server
```
Make a note of the root password you choose to use.

### 3. Check the mysql version with this command:
```
mysql --version
```
You should see output like this: `Ver 14.14 Distrib 5.7.27, for Linux (x86_64) using  EditLine wrapper`.
If your Distrib version number is less than 5.7.6, then you should initialize the data directory:
```
sudo mysql_install_db
```

### 4. Check the mysql service status:
```
service mysql status
```
If the output is `Unknown job: mysql`, then start the mysql service:
```
sudo service mysql start
```

### 5. Login into the mysql cli with this command:
```
mysql -u root -p
```
And enter the password you used during installation when prompted.

### 6. Create database with a name of your choosing:
```
create database gt_database;
```
Verify that it was created:
```
show databases;
```
You should see it show up in the list.
```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| gt_database        |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```
You can exit the mysql cli with `\q`.

### 7. Establish connection to the database from app.js file of the application by adding this block of text into your root app.js file.
```
// Establish connection to the database from app.js file of application
const mysql = require('mysql');
const database = mysql.createConnextion({
        host: 'localhost',
        user: 'root',
        password: '<your_password>',
        database: 'gt_database'
});
database.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
});

```
Replace the password value with mysql root user password and gt_database with your database name.
Now test your connection with `node app.js`. If at this point you get any kind of error that states that your application could not find a particular module, then your installation of express was likely incomplete. We ran into this error ourselves for the module `cookie-parser/`, so we corrected this with the following lines in the root directory:
```
npm install
npm install --save cookie-parser
```
Running `app.js` should now result in the console log `Connected!`.

## Installing MySQL Workbench

### 1. Install MySQL Workbench
```
sudo apt-get install mysql-workbench
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

### models/
Represents data, implements business logic, and handles storage.

### public/
Contains all static files like images, styles, and javascript.

### routes/
Responsible for initializing and associating route with controllers.

### views/
Provides templates which are rendered and served by your routes.

### tests/
Tests everything which is in the other subdirectories.

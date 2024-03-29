# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Blow is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
2. SSH username
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username
6. Database password
7. Database name (basically the name that contains all your tables)
8. Instructions on how to use the above information.

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.

# Required Items:
    1. http://13.52.75.46/
    2. ubuntu
    3. found in Team05KeyPair.pem 
        Note: server.js is running in the background even when logged off and it must restarted with "node <relative filepath>server.js" if it is ever killed
    4. Hosted directly on server
    5. root
    6. Fr0ntEndBackEnd
    7. gt_database
    8. 
        Step 1: Download Team05KeyPair.pem and save it onto your terminal
        Step 2: Take note of both the username and current working address (the address is changed every time the server is stopped/started)
        Step 3: Start Git Bash, and ssh into the AWS server using the following command:
            ssh -i <filepath to pem file on your terminal> ubuntu@<current working URL/IP address>

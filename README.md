# Running the App Locally

Download the XAMPP Control Panel →

https://www.apachefriends.org/download.html

Note: if you have a MySQL community server downloaded in your local machine then it’s ok - you just have to make sure it’s running (you’ll have to deal with MySQL Workbench instead of phpMyAdmin about which I’m going to talk below)

Then Start the Modules (1. Apache and 2. MySQL) then click on Admin next to MySQL - it’ll take you to the interface of phpMyAdmin which is the administrative tool for MySQL server in where you’ll see the Database and Tables which will make by all of your CRUD operations throughout the process of making the HTTP requests with the postman.

Note: if you’ve installed MySQL Community Server then your MySQL-Module will not Start that’s why you have to Stop your MySQL server to run the server with the XAMPP

To do so → go to Services -- and then Stop the MySQL server

Now, Fork (or clone) this repository to your GitHub and then clone it to your code editor then in your terminal run the command →

             npm install     (it’ll install the dependencies)

             node server.js     (it’ll start running the app’s server)

Note: you can use → nodemon server.js (instead of → node server.js) to run the server

install nodemon :

             npm install --g nodemon

We use nodemon so that we don't need to reconnect our server while making any change in node.js, it'll automatically reconnect our server (it’ll save our time while developing 😀)

Now, inside of phpMyAdmin we'll create the app's database called todotaskmanager.

Then, go to http://localhost:3000/

Now, we can run the app with having the record in database with our localhost.

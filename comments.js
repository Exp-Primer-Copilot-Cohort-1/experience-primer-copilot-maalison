// Create web server
// Create a web server using express

//Create a web server
var express = require('express');
var app = express();

//Define the port
var port = 3000;

//Define the route
app.get('/', function(req, res){
    res.send('Welcome to the web server');
});

//Start the server
app.listen(port, function(){
    console.log('Server is running on port: ' + port);
});

//To run the server, use the following command:
//cannot find module express

//it's running from a github instance instead of localhost



// To test the server, open the browser and type localhost:3000. 
// You will see the message "Welcome to the web server" on the screen.

// The server is running on port 3000. 
// You can change the port number to any other number. 
// If you want to run the server on port 80, 
// you will need to run the server as a super user. 
// To run the server on port 80, you can use the following command:

// sudo node comment.js

// You will be asked for the password. 
// After entering the password, the server will start running on port 80. 
// You can access the server by typing localhost in the browser. 
// You will see the message "Welcome to the web server" on the screen. 
// To stop the server, use the following command:

// sudo killall node

// The server will stop running. 
// You can use the same command to stop the server running on port 3000. 
// You don't need to run the server as a super user to run it on port 3000. 
// You can run the server on any port number greater than 1024 without using the super user. 
// The server will run on the port number that you specify. 
// You can access the server by typing localhost:portnumber in the browser.

// The server will respond with the message "Welcome to the web server" on the screen. 
// The server will keep running until you stop it. 
// You can stop the server by pressing Ctrl + C in the terminal. 
// The server will stop running and the port will be released. 
// You can run the server again on the same port or a different port. 
// You can run the server on any port number that is available. 
// The server will keep running on the port number that you specify. 
// The server will keep running and listening for requests. 
// The server will respond to the requests and send the response to the client. 
// The server will keep running until you stop it. 
// You can run the server on any port number that is available. 
// The server will keep running and listening for requests. 
// The server will respond to the requests and send the response to the client. 
// The server will keep running until you stop it. 
// The server will keep running and listening for requests
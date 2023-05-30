// Import required modules
const http = require('http');

// Define the port number
const port = process.env.PORT || 3000;
const healthCheckPort = 3001;
const env = process.env.env || 'local';

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/html');

    // Send an HTML response to the client
    res.end(`<h1 style="color: blue;">Hello, JaingoUnchaind! Blue server is running on port ${port} in ${env} env!</h1>`);
});

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create the health check server
const healthCheckServer = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/plain');

    // Send a simple response to the client
    res.end('Health check passed!');
});

// Start the health check server and listen on the defined port
healthCheckServer.listen(healthCheckPort, () => {
    console.log(`Health check server is running on port ${healthCheckPort}`);
});

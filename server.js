const net = require('net');
const port = 5000;

const server = net.createServer((client) => {
    console.log(`${client.remotePort} has joined the server`);
  
    client.write(`Welcome to the server ${client.remotePort}!`);

    client.setEncoding('utf8')
    client.on('data', (chunk) => {
        client.write(`${client.remotePort}: ${chunk}`);
        console.log(`${client.remotePort}: ${chunk}`);
    });
   
});
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});
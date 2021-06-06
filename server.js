const net = require('net');

const server = net.createServer((client) => {
    client.name = 'myNewClient';
    console.log(`Welcome, User ${client.remoteAddress}: ${client.remotePort}`);

    client.write('Welcome to the chat server!');

    client.on('connect', (client) => {
        let userName = `${client.remoteAddress}: ${client.remotePort}`;
        console.log(`${userName} has joined the server!`);
        clients.push(client);
    });

    client.on('end', () => {
        console.log(`${client.remoteAddress} has left the server.`);
    });
    server.on('error', (err) => {
        throw err;
    });
}).listen(5000);
console.log('listening on port 5000');


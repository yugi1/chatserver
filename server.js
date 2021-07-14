const net = require('net');
const port = 5000;
let clients = [];

const server = net.createServer((client) => {
    console.log(`${client.remotePort} has joined the server`);

    client.write(`Welcome to the server ${client.remotePort}!`);


    client.setEncoding('utf8')
    client.on('data', (chunk) => {
       console.log(`${client.remotePort}: ${chunk}`);
       if(chunk === `/w ${client.remotePort}` + chunk) {
        client.write(chunk);
    }
    let newUsername = '';
    if(chunk === `/username` + newUsername) {
        //give client new username hr
        client.remoteAddress = newUsername;
    }
    if(chunk === `/clientlist`) {
        console.log()
    }
    if(chunk === `/kick ${client.remotePort}`) {
        client.write('please enter admin password');
        //security  check password hr
        client.end('kicked', (password) => {
            console.log(`${client.remotePort} has been kicked from the server`);
        })
    }
    });
   
});


server.listen(port, () => {
    console.log(`listening on port ${port}`);
});
//push chat to chat log

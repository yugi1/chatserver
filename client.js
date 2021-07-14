const net = require('net');
const port = 5000;

const client = net.createConnection({ port: 5000 }, () => {
    console.log('connected to server');

    process.stdin.setEncoding('utf8')

    process.stdin.on('readable', () => {
        let chunk;
        while ((chunk = process.stdin.read()) !== null) {
            client.write(`${chunk}`);
        }
      
    });
    process.stdin.on('end', () => {
        client.end();
    });
});
client.on('data', (data) => {
    console.log(data.toString());
});
client.on('end', () => {
    console.log('server disconnected');
})

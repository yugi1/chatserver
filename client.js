const net = require('net');

const client = net.createConnection({port: 5000}, () => {
    console.log('connected to server');
});

 client.on('data', (data) => {
    console.log(data.toString());
}); 
client.on('end', () => { 
    console.log('logged off'); 
});  
client.on('error', (err) => { 
    console.error(err); 
}); 
process.stdin.on('data', (data) => {
    console.log(`${data.toString()}`);
  });

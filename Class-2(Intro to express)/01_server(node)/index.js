const http = require('http')

const PORT = 8000; 

const myServer = http.createServer((req, res) =>{
    res.end("Hello from server");
    console.log('Server started');
})

myServer.listen(PORT, ()=>{
    console.log("Server started on port", PORT);
})
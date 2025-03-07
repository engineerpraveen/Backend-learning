const http = require('http')
const fs = require('fs');
const url = require('url');


const PORT = 8000; 

const myServer = http.createServer((req, res) =>{
    //res.end("Bye from server");
    // console.log(req.url);


    const parseurl = url.parse(req.url, true)
    console.log(parseurl);
    
    const log = `${req.url} Request recieved \n`;

    fs.appendFile("log.txt", log, (error, data)=>{
        switch (parseurl.pathname) {
            case "/":
                res.end("This is home page");
                break;
            case "/about":
                res.end("This is about page");
                break;
            case "/contact":
                res.end("This is contact page");
                break;
            case "/product":
                const shoes = parseurl.query.shoes
                res.end("This is product page "+"here are shoe " + shoes);
                break;    
            default:
                res.end("Not Found");
                break; 
        }
    })    
})

myServer.listen(PORT, ()=>{
    console.log("Server started on port", PORT);
})
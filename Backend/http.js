const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("homepage");

    }
    else if(req.url === '/about'){
        res.end("about page");
        }
        else{
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end("404 not found");
            }
    console.log('Server is running on port 3000')
})

server.listen(4000)

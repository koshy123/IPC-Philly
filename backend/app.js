const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Opppps</h1>
    <p> we can find the page you are looking for </p>
    <a href="/"> home </a> 
    `)
})

server.listen(5000)
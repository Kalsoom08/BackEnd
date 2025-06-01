const http = require('http');
const { parse } = require('path');
const url = require("url");
const Port = 3000; 

const server = http.createServer((req, res) => {
    const Path = url.parse(req.url, true)
    const method = req.method;

    if (method === 'GET'){
        if(Path.pathname == '/'){
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Successfully Loaded')
        }else{
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found')
        }
    }else if(method === 'POST'){
        body = '';
        req.on('data', (chunk)=>{
            body+= chunk;
        })
        req.on("end", ()=>{
            const parseBody = JSON.parse(body)
            res.end(JSON.stringify(parseBody))
        })
    }else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end(`${method} method is not allowed.`);
}


    // if (method === "GET") {
    //     if (Path.pathname === "/") {
    //         res.writeHead(200, { "Content-Type": "text/plain" });
    //         res.end("Home Page");
    //     } else if (Path.pathname === "/about") {
    //         res.writeHead(200, { "Content-Type": "text/plain" });
    //         res.end("About Page");
    //     } else {
    //         res.writeHead(404, { "Content-Type": "text/plain" });
    //         res.end("404 Page Not Found");
    //     }
    // }

    // else if (method === "POST") {
    //     let body = "";

    //     req.on("data", (chunk) => {
    //         body += chunk;
    //     });

    //     req.on("end", () => {
    //         try {
    //             const parsedBody = JSON.parse(body);
    //             res.writeHead(200, { "Content-Type": "application/json" });
    //             res.end(JSON.stringify({ response: parsedBody }));
    //         } catch (error) {
    //             res.writeHead(400, { "Content-Type": "application/json" });
    //             res.end(JSON.stringify({ error: "Invalid JSON" }));
    //         }
    //     });

    //     req.on("error", (err) => {
    //         res.writeHead(500, { "Content-Type": "text/plain" });
    //         res.end(err);
    //     });
    // }

    // else {
    //     res.writeHead(405, { "Content-Type": "text/plain" });
    //     res.end(`${method} method is not allowed.`);
    // }
});

server.listen(Port, () => {
    console.log(`Server listening on http://localhost:${Port}`);
});

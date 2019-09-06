const http = require('http');
var url = require("url");
const os = require('os');
const port = 3030;
const content = process.env.SERVERCONTNET || "Hello world";

const requestHandler = (request, response) => {
    response.end(content + " requested as " + url.parse(request.url).pathname  + " from " + os.hostname());
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
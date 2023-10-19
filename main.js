var app = require('http').createServer(function (request, response) {
    // print http orignal message like curl

    // request.method, URL and httpVersion
    console.log(request.method + ' ' + request.url + ' HTTP/' + request.httpVersion);

    // request.headers
    for (var property in request.headers) {
        if (request.headers.hasOwnProperty(property)) {
            console.log(property + ': ' + request.headers[property])
        }
    }

    const data = { message: 'Hello, world!' };
    const jsonData = JSON.stringify(data);
  
    response.setHeader('Content-Type', 'application/json');
    response.end(jsonData);

});
app.listen(8080);   
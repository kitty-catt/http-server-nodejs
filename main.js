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
});
app.listen(8080);   
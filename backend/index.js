const http = require("http");
const port = 8000;
const fs = require("fs");

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile('./index.html' , function(err , data) {
    if (err) {
      console.log('error' , err);
      return res.end('<h1>404 Not Found</h1>');
    }
    res.end(data);
  });

  // res.end("<h1>Hello</h1>");
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  } else console.log("Server listening on port ", port);
});

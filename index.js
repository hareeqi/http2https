const http = require('http');

const bindPort = process.env.HTTP2HTTPS_BIND_PORT || process.argv[2] || 80
let destPort = process.env.HTTP2HTTPS_DEST_PORT || process.argv[3]
destPort = (destPort && `:${destPort}`) || ""

const server = http.createServer((req, res) => {
  console.log("received none https request...redirecting");
  res.writeHead(301,{Location: `https://${req.headers.host.split(":")[0]}${destPort}${req.url}`});
  res.end();
});
server.listen(bindPort,()=>console.log(`http2https ==> ${bindPort}${destPort||`:${443}`}`));

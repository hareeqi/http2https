const http = require('http');
const arg1 = process.argv[2]
const arg2 = process.argv[3]

const bindPort = process.env.HTTP2HTTPS_BIND_PORT || (Number.isInteger(arg1) && arg1) || 80
let destPort = process.env.HTTP2HTTPS_DEST_PORT || (Number.isInteger(arg2) && arg2)
destPort = (destPort && `:${destPort}`) || ""

const server = http.createServer((req, res) => {
  console.log("received none https request...redirecting");
  res.writeHead(301,{Location: `https://${req.headers.host.split(":")[0]}${destPort}${req.url}`});
  res.end();
});
server.listen(bindPort,()=>console.log(`http2https ==> ${bindPort}${destPort||`:${443}`}`));

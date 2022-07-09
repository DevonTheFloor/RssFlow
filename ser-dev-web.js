const http = require('http'),
  app =require('./app'),
  portNb = process.env.RSS_PORT,
  hostRss = process.env.RSS_HOSTNAME;

//app.set('port',process.env.PORT || portNb);
const server = http.createServer(app);
console.log('connecté port :', portNb);
console.log('Host rss : ', hostRss);

server.listen(portNb, hostRss);


var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();

if(process.env.USERNAME && process.env.PASSWORD){
  app.use(basicAuth(process.env.USERNAME, process.env.PASSWORD));
}
app.use(express.static(__dirname + '/_dist'));

app.listen(process.env.PORT || 3000);

var express = require('express')
var app = express()


var port = process.env.PORT || 4000;

app.use('/', express.static('build'))

app.listen(port);
console.log('Server is running on port ' + port)

console.log("You're all set Space Cowboy")

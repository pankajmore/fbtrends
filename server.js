var express = require("express"),
        app = express.createServer();
app.use(express.static(__dirname + '/html'));
app.listen(3001);

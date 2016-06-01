var Twig = require("twig");
var express = require('express');

var app = express();

app.use(express.static('public'));

// This section is optional and used to configure twig. 
app.set("twig options", {
    strict_variables: false
});
Twig.cache(false);

// Just a visit counter
var nbVisits = 0;

app.get('/', function(req, res) {
    nbVisits++;
    res.render('index.twig', {
        visits: nbVisits
    });
});

app.listen(8080);
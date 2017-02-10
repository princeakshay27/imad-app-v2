var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var content={
    title:'article one hi I am akshay' ,
    heading: 'article one' ,
    date:'feb 10th 2016' ,
    content: `  
    <p>ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..
                  ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda...</p>
                  `
};

var htmltemplate= 
`



` ;


app.get('/articleone', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});
app.get('/articletwo', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

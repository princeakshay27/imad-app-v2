var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles=
{
 'articleone' :
 {
    title:'article one hi I am akshay' ,
    heading:'articleone' ,
    date:'feb 10th 2017' ,
    content: `  
    <p>ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..
                  ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda...</p>
                  `
 },
 'articletwo':
 { 
    title:'article two hi I am akshay' ,
    heading:'articletwo' ,
    date:'feb 10th 2017' ,
    content: `  
    <p>ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..
                  ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda...</p>
                  `
    
 },
 'articlethree':
 { 
    title:'article three hi I am akshay' ,
    heading:'articlethree' ,
    date:'feb 10th 2017' ,
    content: `  
    <p>ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..
                  ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda..ab tere bin ab rah ni sakte tere bina kya wajud mera...tujhse juda agar ho jayenge to khud se hi ho jaenge juda...</p>
                  `
    
 }
};

function createTemplate(data) 
{
   
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate= 
    `<html>
    <head>
    <title>${title}
    </title>
    <meta name="view port" content="width-device-width,initial-scale-1">
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
 <div class="container">
            <div>
             <div>
        <a href="/">home</a>
         </div>
            <hr/>
        <h3>${heading}</h3>
    <div>
        ${date}
    </div>
    <div>
       ${content}
    </div>
        </div>
 </div>
    </body>
</html>
`
;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req, res) {
   res.send(createTemplate(articles(articlename)));
});
var articlename=req.params.articlename;


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

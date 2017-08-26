var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one',function(req,res){
    res.send(<!doctype html>
<html>
<head>
<style>
table,th,td{
border:1px solid black;
border-collapse:collapse;
}
a:hover{
color:pink;
background-color:gray;
}
th,td{
padding: 15px;
}
input.MyButton {
width: 300px;
padding: 20px;
cursor: pointer;
font-weight: bold;
font-size: 150%;
background: white;
color: gray;
border: 1px solid #3366cc;
border-radius: 10px;
}
input.MyButton:hover {
color: #ffff00;
background: #000;
border: 1px solid #fff;
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body >
<h1 style="align:center;color:blue;text-align:center">My profile<h1>
<center><img src="https://srikrishnachaithanya.files.wordpress.com/2011/05/returned150.jpg" alt="img cannot be displayed" width="250" height="250" align="middle"></center>
<br> 
<a href="http://yeshwanthgunda98.imad.hasura-app.io/"  target="_blank" >visit yeshwanth's imad profile </a>
<hr>
<table style="width:100%">
<tr>
<th>name</th>
<th>age</th>
<th>b.tech %</th>
</tr>
<tr>
<td>yeshwanth</td>
<td>19</td>
<td>80</td>
</tr>
</table>
<hr>
<h4>my friends</h4>
<ul style="list-style-type:disc">
<li>vineeth</li>
<li>vamshi</li>
</ul>
<hr>
<h4>college details</h4>
<p>mvsr college hyd</p>
<form >
<input class="MyButton" type="button" value="mvsr site" onclick="window.location.href='http://www.mvsrec.edu.in/'" >
</form>);
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

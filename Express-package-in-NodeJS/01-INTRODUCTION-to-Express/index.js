var express = require('express');
var app = express();
var bodyParser = require('body-parser')

console.log("Express FrameWork.");

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create application/json parser
var jsonParser = bodyParser.json()


// routes with different methods.
app.get('/', function(req, res){
    // res.sendFile(__dirname + '/index.html');
    res.render('index'); // rendering by ejs
});

app.get('/contact', function(req, res){
    // res.sendFile(__dirname + '/contact.html');
    console.log(req.method);
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.method);
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function(req, res){
    // render without __dirname. because by default ejs look into views directory. 
    let data = {age: 24, name: "Vikram", fruits: ["Apple", "Grapes", "Cherry"]} 
    res.render('profile', {id: req.params.id, data: data});
});

app.listen(3000);
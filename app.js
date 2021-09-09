const faker = require("faker");
const mysql = require('mysql');
var express = require('express');
var bodyparser= require('body-parser');

var app=express();

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

const connection = mysql.createConnection({
	host : 'localhost',
	user: 'root',
	database:'join_us'
});

app.get('/', function(req,res){
	var q= 'select count(*) as count from users';
	connection.query(q,function(err,results){
		if(err) throw err;
		var count = results[0].count;
		res.render('home',{data:count});
	})
})

app.post('/register',function(req,res){
	var person = {
		email:req.body.email,
	};
	connection.query('insert into users set ?',person,function(err,results){
		if(err) throw err;
		res.redirect('/');
	})
})


app.listen(3000,function(){
	console.log('Listening');
})


// var data=[];
// for(let i=0;i<=523;i++){
// 	data.push([
// 	faker.internet.email(),
// 	faker.date.past()
// ])
// }

// var q = 'insert into users(email,created_at) values ?'

// var end_result = connection.query(q,[data],function(error,results){
// 	if(error) throw error;
// 	console.log(results);
// });

// connection.end();
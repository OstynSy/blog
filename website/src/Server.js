const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');

app.use(morgan('combined'));

// Connection to mySQL database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345678',
	port: '3306',
	database: 'Blog',
});

connection.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
});

//REST API
//GET, POST, PUT, DELETE

app.get('/', function (req, res) {
	console.log('HOME PAGE SERVER');
	res.send('SERVER HOME');
});

app.get('/about', function (req, res) {
	console.log('ABOUT PAGE SERVER');
	res.send('SERVER ABOUT');
});

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`Server is up and listening to port ${port}`);
});

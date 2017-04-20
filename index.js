'use strict';
const express = require ('express');
const app = new express();

app.listen(8000, () =>{
	console.log("Server in ascolto sulla porta 8000");
});

app.get('/', (req,res) => {
	res.send('Home');
});

app.get('/Author', (req,res) =>{
	res.send('created by Matteo');
});

app.get('*', (req,res) =>{
	res.status(404).send('There is a problem!');
});
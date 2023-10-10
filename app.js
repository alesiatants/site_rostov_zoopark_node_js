//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect('mongodb://127.0.0.1/visitorDB');
//mongoose.set("useCreateIndex", true);
const visitorsSchema = new mongoose.Schema({
	name: String,
	email: String,
	message: String
});
const Visitor = mongoose.model("Visitor", visitorsSchema);
const animalsSchema = new mongoose.Schema({
	gender: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	image: {
		type: Buffer, // casted to MongoDB's BSON type: binData
		required: true
	},
	description: {
		type: String,
		required: true
	}
});
const Animal = mongoose.model("Animal", animalsSchema);
/*const animalData = {
	gender: "predators",
	name: "Лев",
	image: fs.readFileSync(`public/img/Лев.jpg`),
	description: "Some text"
}

const animal = new Animal(animalData);
animal.save();*/
app.get("/", function(req, res){
	res.render("home");
});
app.get("/zoomap", function(req, res){
  res.render("zoomap");
});
app.get("/birds", function(req, res){
	Animal.find()
		.then(function (animals) {
			res.render("birds", {
				animals: animals
				});
			})
		.catch(function (err) {
  		console.log(err);
		});
});
app.get("/predators", function(req, res){
	Animal.find()
		.then(function (animals) {
			res.render("predators", {
				animals: animals
				});
			})
		.catch(function (err) {
  		console.log(err);
		});
});
app.get("/ungulates", function(req, res){
	Animal.find()
		.then(function (animals) {
			res.render("ungulates", {
				animals: animals
				});
			})
		.catch(function (err) {
  		console.log(err);
		});
});
app.get("/rodents", function(req, res){
	Animal.find()
		.then(function (animals) {
			res.render("rodents", {
				animals: animals
				});
			})
		.catch(function (err) {
  		console.log(err);
		});
});
app.get("/visitors", function(req, res){
  res.render("visitors");
});
app.get("/about", function(req, res){
  res.render("about");
});
app.get("/photogallery", function(req, res){
  res.render("photogallery");
});
app.post("/compose", function(req, res){
  const visitor = new Visitor ({
		name: req.body.userName,
		email: req.body.userEmail,
		message: req.body.userMessage
		});
		visitor.save(function(err){
			if (!err){
				res.redirect("/");
			}
			});
	
  res.redirect("/");

});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
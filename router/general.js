const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


let nn="bb"
public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  console.log(users)
  return res.send(JSON.stringify(books,null,4));;
  
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
     return res.send(books[req.params.isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  
   Object.values(books).forEach(element => {
     if( element.author===req.params.author){
      console.log(element) 
     nn=req.params.author
     return res.send(element);
    }
     
  });


 
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  
  Object.values(books).forEach(element => {
    if( element.title===req.params.title){
     console.log(element) 
    nn=req.params.title
    return res.send(element);
   }
    
 });

});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  console.log(books[req.params.isbn].reviews)
  return res.send(books[req.params.isbn].reviews);

});

module.exports.general = public_users;

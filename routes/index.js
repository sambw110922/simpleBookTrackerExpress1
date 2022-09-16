var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Book Tracker' });
});

//  Read books
router.get("/booksread", function(req, res){
  
    //  default book
    var tb = [
      {
        "bookID" : 0,
        "bookTitle" : "DEFAULT",
        "bookAuthor" : "DEFAULT",
        "isOwned" : false,
        "hasRead" : false
      }
    ];
  
    //  get books
    const bookdata = require("../public/json/totalbooks.json")
  
    //  Books owned
    var br = [];
  
    for(let i = 0; i < bookdata.booklist.length; i++){
      
      if(bookdata.booklist[i].hasRead == true){
        br.push(bookdata.booklist[i]);
      }
  
    }

  res.render("booksread", { booksread: br} );

});

//  The books that I own.
router.get("/bookshave", function(req, res){

  //  default book
  var tb = [
    {
      "bookID" : 0,
      "bookTitle" : "DEFAULT",
      "bookAuthor" : "DEFAULT",
      "isOwned" : false,
      "hasRead" : false
    }
  ];

  //  get books
  const bookdata = require("../public/json/totalbooks.json")
 
  tb = bookdata;

  //  Books owned
  var bo = [];

  for(let i = 0; i < bookdata.booklist.length; i++){
    
    if(bookdata.booklist[i].isOwned == true){
      bo.push(bookdata.booklist[i]);
    }

  }

  res.render("bookshave", { booksowned:  bo } );


});

//  Total books
router.get("/totalbooks", function(req, res){

  var tb = [
    {
      "bookID" : 0,
      "bookTitle" : "DEFAULT",
      "bookAuthor" : "DEFAULT",
      "isOwned" : false,
      "hasRead" : false
    }
  ];

  const bookdata = require("../public/json/totalbooks.json")
 
  var totbook = [];

  for(let i = 0; i < bookdata.booklist.length; i++){
    totbook.push(bookdata.booklist[i]);
  }

  tb = totbook;
   
  res.render("totalbooks", { totalBooks : tb });

});

//  The about page
router.get("/about", function(req, res, next){
 res.render("about");
});


module.exports = router;

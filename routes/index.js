var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Tracker' });
});

//  Read books
router.get("/booksread", function(req, res, next){
  
  /*
  //  Books I've read
  var br = [
    {
      "author":"JRR Tolkien",
      "title":"The Lord of the Rings: The Fellowship of the Ring"
    },
    {
      "author":"JRR Tolkien",
      "title":"The Lord of the Rings: The Two Towers"
    },
    {
      "author":"Stephen King",
      "title":"The Outsider"
    },
    {
      "author":"Stephen King",
      "title":"The Revival"
    },
    {
      "author":"Stephen King",
      "title":"Lisey's Story"
    },
    {
      "author":"Peter Robinson",
      "title":"Before the Poison"
    },
  ];
  */

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
    var br = [];
  
    for(let i = 0; i < bookdata.booklist.length; i++){
      
      if(bookdata.booklist[i].hasRead == true){
        br.push(bookdata.booklist[i]);
      }
  
    }

  res.render("booksread", { booksread: br} );

});

//  The books that I own.
router.get("/booksowned", function(req, res, next){

  /*
  //  Books that I own.
  var bo = [
    {
      "author":"JRR Tolkien",
      "title":"The Hobbit"
    },
    {
      "author":"JRR Tolkien",
      "title":"The Lord of the Rings: The Fellowship of the Ring"
    },
    {
      "author":"JRR Tolkien",
      "title":"The Lord of the Rings: The Two Towers"
    },
    {
      "author":"JRR Tolkien",
      "title":"The Lord of the Rings: The Two Towers"
    },
  ];

  */

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
router.get("/totalbooks", function(req, res, next){

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
 
  tb = bookdata;

  res.render("totalbooks", { totalBooks : tb });

});

//  The about page
router.get("/about", function(req, res, next){
 res.render("about");
});

module.exports = router;

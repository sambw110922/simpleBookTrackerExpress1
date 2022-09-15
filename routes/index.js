var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Tracker' });
});

//  Read books
router.get("/booksread", function(req, res, next){
  
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

  res.render("booksread", { mybooks: br} );

});

//  The about page
router.get("/about", function(req, res, next){
 res.render("about");
});

module.exports = router;

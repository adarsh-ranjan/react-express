var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json([
    {
    "id":1,
    "name" :"Adarsh",
   },
   {
    "id":2,
    "name" :"pankaj",
   },
   {
    "id":3,
    "name" :"Adarsh",
   },
])
});

module.exports = router;

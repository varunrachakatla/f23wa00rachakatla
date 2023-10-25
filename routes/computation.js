var express = require('express');
var router = express.Router();

/* GET computation. */
router.get('/', function(req, res, next) {
    // Build a fake url so we can get the search parameters using a URL object
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    const num = Math.random()
    const userInput = search_params.get('x');
    if(userInput){
        const responseMessage = `Math.round() applied to ${userInput} is ${Math.round(userInput)}`
        res.send(responseMessage);
    }
    else{
        const responseMessage = `Math.round() applied to ${num} is ${Math.round(num)}`
        res.send(responseMessage);
    }
  
});

module.exports = router;

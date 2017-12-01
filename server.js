'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;


//Local
app.use(express.static(`${__dirname}/public`));
// Heroku
// app.use(express.static(`${__dirname}/public`), function(err, req, res, next){
//   console.log('app.use');
//   if(err){
//     console.log('err:', err.stack);
//
//   }
//   console.log('err:', res.status);
// });

// // Local
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, 'app', 'index.html'));
// });
// Heroku
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname,'public/index.html'));
});

app.listen(PORT, function(err){
  console.log('server up on port ', PORT);
  if (err) {
    console.log(err);
  }
});

'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/public`));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname,'public/index_bundle.js/'));
});

app.listen(PORT, function(err){
  console.log('server up on port ', PORT);
  if (err) {
  console.log(err);
}
});

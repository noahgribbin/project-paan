'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/build`));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname,'client/index.html'));
});

app.listen(PORT, function(){
  console.log('server up on port ', PORT);
});

'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/build`));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'app', 'index.html'));
});

app.listen(process.env.PORT || 8080, function(){
  console.log('server up on port ', PORT);
});

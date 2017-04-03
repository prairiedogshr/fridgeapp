const express = require('express')
const port = process.env.PORT || 1337
const app = express()

//parsing middleware
require('./config/middleware.js')(app, express);

//passport
//will be passport
//routes
require('./config/routes.js')(app, express);

app.listen(port, () => {
  console.log('Server is on '+ port)
})


module.exports = app;

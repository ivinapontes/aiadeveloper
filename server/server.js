const express =require('./../node_modules/express');
const app = express();


const bodyParser = require('./../node_modules/body-parser');
app.use(bodyParser.json());

// session express to get all the session info
const session = require('express-session');
app.use(session({
    secret: 'Super duper secret',
    resave: false,
    saveUninitialized: false
  }))


require('./config/mongoose');
require('./config/routes.js')(app);

app.listen(3001,() => console.log('Server up and running on port 3001'));

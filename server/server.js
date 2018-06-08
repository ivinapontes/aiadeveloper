const express =require('./../node_modules/express');
const app = express();
var multer = require("multer");
var mime = require("mime-types");
var path = require("path");
var fs = require('fs');


const bodyParser = require('./../node_modules/body-parser');
app.use(bodyParser.json());

// session express to get all the session info
const session = require('express-session');
app.use(session({
    secret: 'Super duper secret',
    resave: false,
    saveUninitialized: false
  }))
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.resolve(__dirname, "uploads"));
    },
    filename: function(req, file, cb) {
      const extension = mime.extension(file.mimetype);
      const filename = file.originalname + "-" + Date.now().toString();
      cb(null, filename + "." + extension);
    }
  });
  
  //this is for uploading photo
  var upload = multer({ storage: storage });
  
  
  require('./config/mongoose');
  require('./config/routes.js')(app);
  app.use("/uploads", express.static("config/uploads"));
  
  // when deploy the app on internet after we built react from npm run script build
  app.use(express.static(path.join(__dirname, '../build')));
  
  // to catch all req
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '../build/index.html'));
});



app.listen(process.env.PORT || 3001,() => console.log('Server up and running on port 3001'));

var mongoose = require("mongoose");
var fs = require("fs");

// mongoose.connect('mongodb://localhost/onemarket');
mongoose.connect('mongodb://onemarket:onemarket1@ds147180.mlab.com:47180/onemarket');
var models_path = __dirname + '/../models';
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >0){
        require(models_path + '/' + file)
    }
})

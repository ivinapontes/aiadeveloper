const express = require('express');
const adminController = require('./../controllers/adminController');
const authUser = adminController.authenticateUser;
var multer = require("multer");
var mime = require("mime-types");
var path = require("path");
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


module.exports = function(app) {
    app.get('/ping', (req,res) => res.send('Poing'));
    app.post('/api/register', adminController.validateRegister(), adminController.createUser);
    app.post('/api/login', adminController.validateLogin(), adminController.loginUser);
    app.post('/api/loginCoupon', adminController.validateCoupon(),adminController.loginCoupon);
    app.post('/api/createListing', upload.fields([{ name: "picture", maxCount: 1 }]),adminController.createListing);
    app.post('/api/createHouse', adminController.validateHouse() ,adminController.createHouse);
    app.post('/api/createCoupon', adminController.validateCoupon(),adminController.createCoupon);
    app.post('/api/userRequest', upload.fields([{ name: "screenshot", maxCount: 1 }]),  adminController.userRequest);
    app.get('/api/getAllHouses',adminController.getAllHouses);
    app.get('/api/getAlluserRequest',adminController.getAlluserRequest);
    app.get('/api/image/:img', function (req, res) {
      res.sendfile(path.resolve('./server/config/uploads/' + req.params.img));
  }); 
    //app.get('/api/users/', authUser, adminController.getAllUsers);
    // app.get('/api/session', (req,res) => res.json({session: req.session}));
    // // app.get('/api/users/:userEmail', authUser, usersController.findOneUser);
    app.get('/api/user', authUser, adminController.getAuthenticateUserName);
    app.get('/api/logout', adminController.logout);
    app.get('/api/isLogin', adminController.isLogin);
    app.get('/api/getAllCoupons', adminController.getAllCoupons);

   
    app.get('/api/getAllListings/', adminController.getAllListings);

    app.post('/api/likePost/:id', adminController.likePost);
    app.put('/api/updatingListing/:id', adminController.updatingListing);
    app.put('/api/updatingHouseCoins/:id', adminController.updatingHouseCoins);

    app.put('/api/updatingHouse/:id', adminController.validateHouse(), adminController.updatingHouse);
    app.put('/api/updatingCoins/:id', adminController.validateCoins(),adminController.updatingCoins);
    app.delete('/api/deleteHouse/:id', adminController.deleteHouse);
    app.delete('/api/deleteListing/:id', adminController.deleteListing);
    app.delete('/api/deleteCoupon/:id', adminController.deleteCoupon);
    app.get('/api/showOneListing/:id', adminController.showOneListing);
    app.get('/api/showOneHouse/:id', adminController.showOneHouse);
    app.delete('/api/deleteRequest/:id', adminController.deleteRequest);
    app.get('/api/session', (req,res) => res.json({session: req.session.user}));

    

    app.post('/api/*', (req,res) => res.json({error :true, message:'ABBOUD! API"s ERROR PLEASE CHECK THE URL'}));

    app.use("/uploads", express.static(path.join(__dirname,"./uploads")));
    // when deploy the app on internet after we built react from npm run script build
    app.use(express.static(path.join(__dirname, '../../build')));
  
    // to catch all req
    app.get('/*', function(req, res){
      res.sendFile(path.join(__dirname, '../../build/index.html'));
    });
}


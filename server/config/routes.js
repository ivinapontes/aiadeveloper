
const adminController = require('./../controllers/adminController');
const authUser = adminController.authenticateUser;


module.exports = function(app) {
    app.get('/ping', (req,res) => res.send('Poing'));
    app.post('/api/register', adminController.validateRegister(), adminController.createUser);
    app.post('/api/login', adminController.loginUser);
    app.post('/api/loginCoupon', adminController.loginCoupon);
    app.post('/api/createListing', adminController.createListing);
    app.post('/api/createHouse', adminController.createHouse);
    app.post('/api/createCoupon', adminController.createCoupon);
    app.post('/api/userRequest', adminController.userRequest);
    app.get('/api/getAllHouses',adminController.getAllHouses);
    app.get('/api/getAlluserRequest',adminController.getAlluserRequest);
    //app.get('/api/users/', authUser, adminController.getAllUsers);
    // app.get('/api/session', (req,res) => res.json({session: req.session}));
    // // app.get('/api/users/:userEmail', authUser, usersController.findOneUser);
    app.get('/api/user', authUser, adminController.getAuthenticateUserName);
    app.get('/api/logout', adminController.logout);

   
    app.get('/api/getAllListings/', adminController.getAllListings);

    // app.post('/api/likeListing/:id', usersController.likeListing);
    app.put('/api/updatingListing/:id', adminController.updatingListing);
    app.put('/api/updatingHouse/:id', adminController.updatingHouse);
    app.delete('/api/deleteHouse/:id', adminController.deleteHouse);
    app.delete('/api/deleteListing/:id', adminController.deleteListing);
    app.delete('/api/deleteCoupon/:id', adminController.deleteCoupon);
    app.get('/api/showOneListing/:id', adminController.showOneListing);

    
    
    app.post('/api/*', (req,res) => res.json({error :true, message:'ABBOUD! API"s ERROR PLEASE CHECK THE URL'}));
    
}


var mongoose = require("mongoose");
var User = mongoose.model('User');
var Listing = mongoose.model('Listing');
var House = mongoose.model('House');
var Coupon = mongoose.model('Coupon');
var Request = mongoose.model('Request');

const {check, validationResult} = require('express-validator/check');

function createUser(req, res, next) {
  
    
    if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.mapped() });
    } else {
        const user = new User(req.body);
        user.password = user.hashPassword(user.password);
        user.save((err) => {
            if (err) {
            console.log('Error saving user: ', user);
            return next();    
            }
            res.json({ok: true});
        })
    }
   }

   var validateLogin = () => {
    return [
            check('email', 'Your email is empty').isEmail(),
            check('email', 'Your email is not exist, please register.')
            .custom(value => User.findOne({email: value}).then(user => user)),
            check('password', 'Your password should be minmum 8 char.')
                  .isLength({ min: 8 })
        ];
};



   var validateRegister = () => {
    return (
            check('firstName', 'Please enter your full name.').not().isEmpty(),
            check('email', 'Your email is not valid').isEmail(),
            check('lastName', 'Your Last name is already exist, try another one.').not().isEmpty(),
            check('password', 'Your password should be between 6 and 16 chars.')
                  .isLength({ min: 6, max: 16 }),
            check('confirmPassword', 'Your password and confirm are not matched.')
                  .custom( (value, {req}) => value === req.body.password)
    );
};

function createCoupon(req, res, next) {
    
        const coupon = new Coupon(req.body);
        coupon.save((err) => {
            if (err) {
            console.log('Error saving coupon: ', coupon);
            return next();    
            }
            res.json({ok: true});
        })
    
   }


   var validateHouse= () => {
    return (
            check('houseName', 'Please enter the house name.').not().isEmpty(),
            check('coins', 'Please enter coins.').not().isEmpty()
    
    );
};
   var validateUserrequest= () => {
    return (
            check('userName', 'Please enter your name.').not().isEmpty(),
            check('userHouse', 'Please enter your hous.').not().isEmpty(),
            check('userLevel', 'Please enter your level').not().isEmpty()
    
    );
};
function createHouse(req, res, next) {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.mapped() });
    } else {
  if(req.session.user)
   {
   const house = new House(req.body);
   house.user_id= req.session.user._id;
   house.save((err) => {
       if (err) {
       console.log('Error saving house: ', house);
       return next();    
       }
       res.json({ok: true});
   })
}
    }
}

var validateCoupon = () => {
    return [
        check('coupon_student', 'Your coupon is not empty, Please enter your coupon.').not().isEmpty(),
            check('coupon_student', 'Your coupon is not exist, Please Contact Us.')
            .custom(value => Coupon.findOne({coupon_student: value}).then(coupon => coupon)),
        ];
};

function loginCoupon( req, res, next){
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.mapped() });
    } else {
    Coupon.findOne({coupon_student: req.body.coupon_student}, (err, coupon_student) => {
       // console.log(coupon_student);
        if (err) {
            console.log('Error getting user: ', err);
            return next();
        }
        if(!coupon_student) {
            return res.status(404).json({err : true, message : "Coupon does not exist"})
        };

        req.session.coupon_student= coupon_student;
        res.json(coupon_student);
    })
}
}


function deleteCoupon(req, res) {
    Coupon.findOneAndRemove({_id:req.params.id})
    .then((res)=>{res.send( res)})
    .catch((err)=>{res.send(err)})
};
 

var validateLogin = () => {
    return [
            check('email', 'Your email is empty').isEmail(),
            check('email', 'Your email is not exist, please register.')
            .custom(value => User.findOne({email: value}).then(user => user)),
            check('password', 'Your password should be minmum 8 char.')
                  .isLength({ min: 8 })
        ];
};

function loginUser( req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.mapped()});
    } else {
    User.findOne({email : req.body.email}, (err, user) => {
        if (err) {
            console.log('Error getting user: ', err);
            return next();
        }
        if(!user) {
            return res.status(404).json({err : true, message : "User dose not exist"})
        };
        if(!user.comparePassword(req.body.password, user.password)) {
            return res.status(404).json({err: true, message:"Passwords do not match"});
        }
        req.session.user= user;
        res.json(user)
    })
 }
}

function getAllHouses(req, res, next) {
    House.find({}, ['houseName','coins', 'level','reason','histories'], (err, houses) => {
        if (err) {
            console.log('Error getting houses: ', err);
            return next();    
            }
            console.log(houses);
            res.json(houses);
    })
}

function updatingHouse(req, res) {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.mapped() });
    } else {
    House.findById(req.params.id)
        .then(function(house) {
            house.houseName = req.body.houseName;
            house.coins= req.body.coins;
            house.level = req.body.level;
            house.save().then(function(house) {
             res.send(house);
        });
    })
        .catch(err => res.send(err));
}
};

var validateCoins= () => {
    return (
            check('coins', 'Please enter coins.').not().isEmpty(),
            check('reason', 'Please enter the reason.').not().isEmpty()
    
    );
};

function updatingCoins(req, res) {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.mapped() });
    } else {
    House.findById(req.params.id)
        .then(function(house) {
            console.log(house.histories);
            console.log(req.body.histories);
            house.coins= req.body.coins;
            house.reason = req.body.reason;
            house.histories.history = house.histories.push(req.body.histories),
            house.save().then(function(house) {
             res.send(house);
        });
    })
        .catch(err => res.send(err));
}
};

function deleteHouse(req, res) {
    House.findOneAndRemove({_id:req.params.id})
    .then((res)=>{res.send( res)})
    .catch((err)=>{res.send(err)})
};

function showOneHouse(req, res) {
    House.findById({_id:req.params.id})
    .then((house)=>{res.json(house)})
    .catch((error)=>{res.json(error)})
}

function createListing(req, res, next) {
        //console.log(req.body.listing);
    //    console.log('sess '+ req.session.user);
    const errors = validateCreateListing(req);
    
      if(req.session.user)
       {if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
   } else {
    
       const listing = new Listing(req.body);
       listing.user_id= req.session.user._id;
       listing.save((err) => {
           if (err) {
           console.log('Error saving user: ', listing);
           return next();    
           }
           res.json({ok: true});
       })
    }
}};

var validateCreateListing= () => {
    return (
            check('name', 'Please enter name.').not().isEmpty(),
            check('price', 'Please enter the price.').not().isEmpty(),
            check('description', 'Please enter the description.').not().isEmpty()
    
    );
};



function getAllListings(req, res, next) {
    const listing = new Listing(req.body);
    Listing.find({})
       .populate('user_id')
       .then((listing)=>{res.send({
           list: listing,
           isUser: req.session.user
       })})
       .catch((err)=>{res.send(err)})
}


function showOneListing(req, res) {
    Listing.findById({_id:req.params.id})
    .populate('user',['firstname','email'])
    .then((listing)=>{res.json(listing)})
    .catch((error)=>{res.json(error)})
}


function deleteListing(req, res) {
    Listing.findOneAndRemove({_id:req.params.id})
    .then((res)=>{res.send( res)})
    .catch((err)=>{res.send(err)})
};


function updatingListing(req, res) {
    Listing.findById(req.params.id)
        .then(function(listing) {
            listing.name = req.body.name;
            listing.price = req.body.price;
            listing.description = req.body.description;
            listing.picture = req.body.picture;
            listing.save().then(function(listing) {
             res.send(listing);
        });
    })
        .catch(err => res.send(err));
};

function userRequest(req, res, next) {
    const errors = validateUserrequest(req);
  
    
    if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.mapped() });
    } else {
    const request = new Request(req.body);
    var filename = null;
    if (req.files && req.files.screenshot && req.files.screenshot[0]) {
      filename = req.files.screenshot[0].filename;
    }
  request.screenshot = filename;
    request.save((err) => {
        if (err) {
        console.log('Error saving request: ', err);
        return next();    
        }
        res.json({ok: true}); 
    })
  }}
  function getAlluserRequest(req, res, next) {
    Request.find({}, ['userName','userHouse','userLevel','screenshot'], (err, requests) => {
        if (err) {
            console.log('Error getting userRequest: ', err);
            return next();    
            }
            console.log(requests);
            res.json(requests);
    })
}
function deleteRequest(req, res) {
    Request.findOneAndRemove({_id:req.params.id})
    .then((res)=>{res.send( res)})
    .catch((err)=>{res.send(err)})
};




function getAuthenticateUserName(req,res, next) {
    res.json({name:req.session.user.firstname});
 }
function getAuthenticateUserID(req,res, next) {
    res.json({name:req.session.user._id});
}

 function authenticateUser(req,res, next) {
    if(req.session.user) return next();
    res.json({err:true, message:"Not Authenticated"});
 }

 function logout(req,res , next) {
    req.session.destroy((err) => {
        if(err) {
            console.log('Error logging out: ', err);
            return next();
        }
        res.json({ok : true})
     })
 };
 

module.exports= {
    getAllHouses,
    createUser,
    createHouse,
    updatingHouse,
    loginUser,
    validateLogin,
    createListing,
    getAllListings,
    showOneListing,
    logout,
    authenticateUser,
    deleteHouse,
     // getAllUsers,
     createCoupon,
     userRequest,
     getAlluserRequest,
     deleteRequest,
    getAuthenticateUserName,
    loginCoupon,
    validateCoupon,
    deleteCoupon,
    showOneHouse,
    updatingListing,
    // likeListing,
    deleteListing,
    validateRegister,
    updatingCoins,
    validateHouse,
    validateCoins,
    validateCreateListing,
    validateUserrequest
 };
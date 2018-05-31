const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');


const ListingSchema = new Schema ({
    name : {type:String, required: true},
    description : {type:String, required: true},
    price : {type:Number, required: true},
    picture : {type:String, required: true},
    like: {type: Number, default: 0 ,required: true},
   // img: { data: Buffer, contentType: String },
    user_id: {type: Schema.Types.ObjectId, ref: "User"},
    createAt: { type : Date, default : Date.now},
    updatedAt: { type : Date, default : Date.now}

})
const AdminSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    createAt: {type: Date, default : Date.now, required: true},
    updatedAt: {type: Date, default : Date.now , required: true}
})

const HousesSchema = {
    houseName: {type:String, required: true},
    coins: {type: Number, required: true},
    level: { type: String, required: true},
    reason:{ type: String, default: 0, required: true},
    histories:[history ={type: String, required: true}],
    createAt: { type : Date, default : Date.now},
    updatedAt: { type : Date, default : Date.now}
}

const CouponSchema = {
    coupon_student: {type: String , required: true},
    createAt: { type : Date, default : Date.now},
    updatedAt: { type : Date, default : Date.now}
}
const RequestSchema = {
    userName: {type: String , required: true},
    userHouse: {type: String , required: true},
    userLevel: {type: String , required: true},
    screenshot: {type: String , required: true},
    createAt: { type : Date, default : Date.now},
    updatedAt: { type : Date, default : Date.now}
}

AdminSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, 12);
}

AdminSchema.methods.comparePassword = function(password, hashPassword){
    return bcrypt.compareSync(password, hashPassword);
}

mongoose.model('User', AdminSchema);
mongoose.model('Listing', ListingSchema);
mongoose.model('House', HousesSchema);
mongoose.model('Coupon', CouponSchema);
mongoose.model('Request', RequestSchema)

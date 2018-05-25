const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
// this is the form of the database that we need to make it as required.
// for crypt the password just we need to install bcrypt npm
const ListingSchema = new Schema ({
    name : {type:String, required: true},
    description : {type:String, required: true},
    price : {type:String, required: true},
    img: { data: Buffer, contentType: String },
    user_id: {type: Schema.Types.ObjectId, ref: "User"},
    password_student: {type: String , required: true},
    createAt: { type : Date, default : Date.now},
    updatedAt: { type : Date, default : Date.now}

})
const AdminSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email:{type:String, required: true},
    password: {type:String, required: true},
    createAt: {type: Date, default : Date.now, required: true},
    updatedAt: {type: Date, default : Date.now , required: true}
})
const HousesSchema = {
    name: {type:String, required: true},
    coins: {type: Number, required: true},
    levels: { type: String, required: true}

}

AdminSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, 12);
}

AdminSchema.methods.comparePassword = function(password, hashPassword){
    return bcrypt.compareSync(password, hashPassword);
}

mongoose.model('User', AdminSchema);
mongoose.model('Listing', ListingSchema);
mongoose.model('HouseSchema', HousesSchema);
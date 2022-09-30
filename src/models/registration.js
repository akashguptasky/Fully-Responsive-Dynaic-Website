const mongoose = require('mongoose');

const registration = new mongoose.Schema({

    email:String,
    password:String,
    address:String,
    username:String,
    zip:String,
    termsandcondition:String

})

module.exports=mongoose.model('registration',registration)
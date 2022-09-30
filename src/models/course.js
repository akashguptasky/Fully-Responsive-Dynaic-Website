const mongoose = require('mongoose')

const Courses=mongoose.Schema({

    icon:String,
    title:String,
    description:String,
    // yaha ek hi link ko dynamic rakha hai 
    linkText:String,
    // yaha pr ye jis link pr jana hai uske liye
    link:String

})
module.exports = mongoose.model('course',Courses);
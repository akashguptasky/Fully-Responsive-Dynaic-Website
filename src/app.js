const express = require('express')
const hbs = require('hbs')
const app = express();
const mongoose = require('mongoose')
const routes=require('./routes/main')
const Detail = require('./models/detail')
const Slider = require('./models/slider');
const slider = require('./models/slider');
const course = require('./models/course')

const bodyParser = require('body-parser')
//static css style.css

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static',express.static("public"))
app.use('',routes)




//(template engine)
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials('views/partials')

// db connections 
mongoose.connect("mongodb://localhost/website_projects",()=>{
    console.log("db connected");
//     course.create({
//         icon:'fab fa-java',
//         title:'Full Stack With JAVA',
//         description:'We provide courses that helps our studnet in learing and placement',
//         linkText:'https://www.google.com',
//         link:'Learn'
//     },
//     {
//         icon:'fab fa-c++',
//         title:'Full Stack With C',
//         description:'We provide courses that helps our studnet in learing and placement',
//         linkText:'https://www.google.com',
//         link:'Learn'
//     },
//     {
//         icon:'fab fa-python',
//         title:'Full Stack With python',
//         description:'We provide courses that helps our studnet in learing and placement',
//         linkText:'https://www.google.com',
//         link:'Learn'
//     },
    
    
    
// )








    // slider.create([
    //     {
    //         title:"Learn JAVA",
    //         subTitle:"Java is one of the most popular programming language.",
    //         imageUrl:"/static/images/pic1.jpg"
    //     },
    //     {
    //         title:"Learn JDBC",
    //         subTitle:"Java is one of the most popular programming language.",
    //         imageUrl:"/static/images/pic2.jpg"
    //     },
    //     {
    //         title:"Learn Spring Boot",
    //         subTitle:"Java is one of the most popular programming language.",
    //         imageUrl:"/static/images/pic3.jpg"
    //     }
    // ])
    





    // Detail.create({
    //     brandName:"Learning point",
    //     brandIconUrl:"https://cdn-icons.flaticon.com/png/512/3976/premium/3976631.png?token=exp=1655014642~hmac=4b7ed65d1f7994d116a35f1be6b1f317",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             labe:"Services",
    //             url:"/services"
    //         },
    //         {
    //             labe:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             labe:"About",
    //             url:"/about"
    //         },
    //         {
    //             labe:"Contact Us",
    //             url:"/contact-us"
    //         }

    //     ]
    // })

});





app.listen(process.env.PORT | 4000,()=>{
    console.log("server started");

})


const express = require('express')
const Detail = require('../models/detail')
const Slider = require('../models/slider')
const Course = require('../models/course')
const Contact = require('../models/contact')
const Registration = require('../models/registration')
const { Router } = require('express')
const routes= express.Router()


routes.get('/', async (req,res)=>{
   
   const details= await Detail.findOne({"_id":"62a586d99ea18fa060870035"})
   const slides= await  Slider.find();
   const course = await Course.find();

   res.render("index",{
        details:details,
        slides:slides,
        course:course

    })
})

routes.get('/gallery', async (req,res)=>{
    const details= await Detail.findOne({"_id":"62a586d99ea18fa060870035"})
    res.render("registration",{
        details:details

    })
})
routes.get('/index1', async (req,res)=>{
    const details= await Detail.findOne({"_id":"62a586d99ea18fa060870035"})
    res.render("index1",{
        details:details

    })
})


// process contact form 
routes.post('/process-contact-form', async (req,res)=>{
    //save the data to the database
    try{
        const data= await Contact.create(req.body);
   
        res.redirect("/")
    }
    catch(e)
    {
        console.log(e)
        res.redirect("/")
    }


})

//process registration form 
routes.post('/registration-form',async (req,res)=>
{
    console.log(req.body);
    try{
      const data = await Registration.create(req.body)
      res.redirect("/")

    }catch(err)
    {
        console.log(err)
        res.redirect("/")
    }

});

module.exports=routes
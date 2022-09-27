
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import user from './models/user.models.js';
import jwt from 'jsonwebtoken';

const app = express() 


mongoose.connect('mongodb+srv://tejmakht:tejmakhtonrails007@cluster0.aiotyik.mongodb.net/UserBB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}, (err, db) => {
    if(!err) {
      console.log('connected');
    } else {
      console.error('error connecting to db',err);
    }
});

app.use(cors())     
app.use(express.json())
 
app.post('/api/register' , async (req,res)=>{

    const userdata = req.body
    const newUser = new user(userdata);
    console.log(newUser)
    
    
    user.findOne({ email: userdata.email }).then((user) => {
    if (user)
    { return res.status(400).json("User already exists")}
     else{
            
            newUser.save()
             
            .then(
              
              console.log("sucessfully"),
         
            )
            .catch((err) =>{
              console.log(err)
            }
             
              );
       
            }  

            return res.json({status:'ok' , user: true , basket:newUser.basket});

    });
})

app.post('/api/login' , async (req,res)=>{

   const loger = await user.findOne({
    email:req.body.email,
    password: req.body.password,
  })

 

  if(loger){

    const token = jwt.sign({  
      name:loger.name,
      email:loger.email,

    },'secret32563256')
   
    return res.json({status:'ok' , user: token , name:loger.name, basket:loger.basket, id:loger._id}) 
  } 
  else{
   return res.json({status: 'error' , user: false })
  }
})


app.post('/api/savebasket' , async (req,res)=>{
  
  
  const outerdata=req.body

  console.log(outerdata.basket)

  user.findByIdAndUpdate(outerdata.id,{basket:outerdata.basket}, function (err, docs) { if(err){
    console.log(err)
  }else{
    console.log('DONE!!!')
  }
   
})  
  if(user)
  return res.json({status:'ok' , user: true });


  
})



app.listen(1337,()=>{

    console.log('Server started on 1337')
})







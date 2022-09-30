
import { model } from 'mongoose';
import promotion  from'../models/promotionModel.js' ;
import officier  from'../models/officierModel.js' ;




//get all promotion

export const getPromotions=(req,res)=>{
   promotion.find().populate('officiers')
    .then(promotion => res.json(promotion))
    .catch(err => res.status(400).json('Error: ' + err));
}


// add promotion


 export const addPromotion=(req,res)=>{
   console.log(req.body.name) ;
   console.log(req.body.officier_id) ;


    const name = req.body.name ; 
    const number =Number(req.body.number) ;
    const type=req.body.type ; 
    const description = req.body.description;
    const duration = req.body.duration ; 
    const dateD =Date.parse(req.body.dateF) ;
    const dateF=Date.parse(req.body.dateF) ;  
    const location =req.body.location ;
    const officiers = req.body.officiers;

    const newPromotion = new promotion(
       {
           name,
           number,
           type,
           description,
           duration,
           dateD,
           dateF,
           location,
           officiers,
         

       }

       
    );
    console.log(newPromotion) ; 

    newPromotion.save()
 .then(() => res.json('promotion  added!'))
 .catch(err => res.status(400).json('Error: ' + err));
    

}


//delte promotion
export const deletePromotion=(req,res)=>{
promotion.findByIdAndDelete(req.params.id) 
.then(()=> res.json("promotion delted"))
.catch(err => res.status(400).json('Error: ' + err));


}

//update promotion
export const updatePromotion=(req,res)=>{

    const name = req.body.name ; 
    const number =Number(req.body.number) ;
    const type=req.body.type ; 
    const description = req.body.description;
    const duration = req.body.duration ; 
    const dateD =Date.parse(req.body.dateF) ;
    const dateF=Date.parse(req.body.dateF) ;  
    const location =req.body.location ;
    const officiers = req.body.officiers;

    promotion.findByIdAndUpdate(req.params.id,{name,number,type,description,duration,dateD,dateF,location,officiers})
    .then(() => res.json("promotion updatetd"))
    .catch(err => res.status(400).json('Error: ' + err));
    


}


//find promotion by id

export const findPromotion=(req,res) =>{
   console.log("bnjr" ) ;
promotion.findById(req.params.id) .populate('officiers')
.then(promotion=> res.json(promotion))
.catch(err => res.status(400).json('Error: ' + err));

}





import { model } from 'mongoose';
import promotion  from'../models/promotionModel.js' ;
import officier  from'../models/officierModel.js' ;






export const getPromotions=(req,res)=>{
   promotion.find().populate('officiers', 'number name adresse')
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





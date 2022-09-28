import officier from '../models/officierModel.js';
let officiers=officier;



//find all officiers
export const getOfficiers=(req,res)=>{
    officiers.find()
     .then(officiers => res.json(officiers))
     .catch(err => res.status(400).json('Error: ' + err));
     
   
 }

 // add officier
 export const addOfficier=(req,res)=>{
     const number = Number(req.body.number) ; 
     const name =req.body.name ;
     const lastName=req.body.lastName ; 
     const grade = req.body.grade;
     const section = req.body.section ; 
     const specialite =req.body.specialite ;
     const birthDate=Date.parse(req.body.birthDate) ; 
     const adresse = req.body.adresse;
     const mobile = req.body.mobile ; 
     const poste =req.body.post ;

     const newOficier = new officier(
        {
            number,
            name,
            lastName,
            grade,
            section,
            specialite,
            birthDate,
            adresse,
            mobile,
            poste,

        }
     );

     newOficier.save()
  .then(() => res.json('officer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
     

 }
// delete officier by id
 export const deleteOfficier=(req,res)=>{
    console.log(req.params.id) ;
    
    officier.findByIdAndDelete(req.params.id) 
     .then(() => res.json("officier deleted"))
     .catch(err => res.status(400).json('Error: ' + err));
     
   
 }

//update officer by id
 export const updateOfficier=(req,res)=>{

    const number = Number(req.body.number) ; 
     const name =req.body.name ;
     const lastName=req.body.lastName ; 
     const grade = req.body.grade;
     const section = req.body.section ; 
     const specialite =req.body.specialite ;
     const birthDate=Date.parse(req.body.birthDate) ; 
     const adresse = req.body.adresse;
     const mobile = req.body.mobile ; 
     const poste =req.body.post ;
    
    
    officier.findByIdAndUpdate(req.params.id,{number,name,lastName,grade,section,specialite,birthDate,adresse,mobile,poste})
     .then(() => res.json("officier updatetd"))
     .catch(err => res.status(400).json('Error: ' + err));
     
   
 }


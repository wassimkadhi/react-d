import mongoose from'mongoose';


const Schema = mongoose.Schema;
const officierModel = new Schema ({
    number: { type: Number, required: true },
    name:{type:String, required:true} ,
    lastName:{type:String, required:true} ,
    grade:{type:String, required:true} ,
    section: { type: String, required: true },
    specialite: { type: String, required: true },
    birthDate: { type: Date, required: true },
    adresse :{type:String, required: true },
    mobile:{type:String},
    poste:{type:String},

  }, {
    timestamps: true,
  }
) ; 

const officier =mongoose.model('officier' , officierModel) ;

export default officier ;


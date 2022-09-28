import mongoose from'mongoose';


const Schema = mongoose.Schema;
const promotionModel = new Schema ({
    name: { type: String, required: true },
    number:{type:Number, required:true} ,
    type:{type:String, required:true} ,
    description: { type: String, required: true },
    duration: { type: String, required: true },
    dateD: { type: Date, required: true },
    dateF: { type: Date, required: true },
    location :{type:String, required: true },
    officiers: [{ type: Schema.Types.ObjectId, ref: 'officier' }]

  }, {
    timestamps: true,
  }
) ; 

const promotion = mongoose.model('promotion' , promotionModel) ;
export default promotion ; 


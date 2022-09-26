import express from"express" ; 
import  {getPromotions} from '../controllers/promotionController.js'
const router =express.Router(); 


router.get('/',getPromotions) ; 


export default router ;
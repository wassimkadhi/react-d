import express from"express" ; 
import  {getPromotions , addPromotion} from '../controllers/promotionController.js'
const router =express.Router(); 


router.get('/',getPromotions) ; 
router.post('/add',addPromotion) ;


export default router ;
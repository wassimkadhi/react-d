import express from"express" ; 
import  {getPromotions , addPromotion,deletePromotion,updatePromotion,findPromotion} from '../controllers/promotionController.js'
const router =express.Router(); 


router.get('/',getPromotions) ; 
router.get('/:id',findPromotion) ; 
router.post('/add',addPromotion) ;
router.patch('/update/:id',updatePromotion) ; 
router.delete('/delete/:id',deletePromotion) ;





export default router ;
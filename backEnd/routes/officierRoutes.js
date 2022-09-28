import express from"express" ; 
import  {getOfficiers, addOfficier,deleteOfficier,updateOfficier} from '../controllers/officierController.js'
const router =express.Router(); 


router.get('/',getOfficiers) ; 
router.post('/add',addOfficier);
router.delete('/delete/:id',deleteOfficier);
router.patch('/update/:id',updateOfficier);


export default router ;
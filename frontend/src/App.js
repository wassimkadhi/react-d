import "bootstrap/dist/css/bootstrap.min.css" ; 
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Navbar from"./components/navbarcomponent";
import OfficersList from"./components/officersListcomponent";
import UpdateOfficier from"./components/updateOfficiercomponent";
import AddOfficier from"./components/addOfficiercomponent";
import DeleteOfficier from"./components/deleteOfficiercomponent";
import PromotionList from"./components/promotionsListComponent";
import OfficiersPromotion from "./components/officiersPromotionComponent";
import Welcome from "./components/Welcome"




function App() {

  return (
<Router>

      
     <Navbar/>
     <br/>
     <Routes>
     <Route  path="/" element={<Welcome />} />
     <Route  path="/promotions" element={<PromotionList />} />
      <Route path="/officiers" exact element={<OfficersList />} />
      <Route path="/update/:id" element={<UpdateOfficier />} />
      <Route path="/add" element={<AddOfficier />} />
      <Route path="/delete/:id" element={<DeleteOfficier />} />
      <Route path="/officiers/:id" exact element={<OfficiersPromotion />} />

      
      
      </Routes>


      
</Router>
   
  );
}

export default App;

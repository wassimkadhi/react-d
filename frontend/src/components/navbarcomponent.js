import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css" ; 
import NavDropdown from 'react-bootstrap/NavDropdown';



export default class Navbar extends Component {

  render() {
   return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

        <li className="navbar-item">
            <NavDropdown title="promotions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/promotions"><h6>Promotions List</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              </NavDropdown.Item>
              <NavDropdown.Item href=""><h6>Find Promotion</h6></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/add"><h6>Add Promotions</h6>
              </NavDropdown.Item>
            </NavDropdown>
          
          </li>

        
          <li className="navbar-item">
           <NavDropdown title="officers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/officiers"><h6>Officiers List</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              
              </NavDropdown.Item>
              <NavDropdown.Item href=""><h6>Find Officier</h6></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/add"><h6>Add Officier</h6>
              </NavDropdown.Item>
            </NavDropdown>
          
          </li>
         
          
        
        
          
        </ul>
        
        </div>
      

      </nav>
    );
     
    


      
    
  }
}
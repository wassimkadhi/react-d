import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from'axios';

export default class AddOfficier extends Component {
  constructor(props) 
  {
   super(props) ;


   this.onChangenumber=this.onChangenumber.bind(this); 
   this.onChangename=this.onChangename.bind(this); 
   this.onChangelastName=this.onChangelastName.bind(this); 
   this.onChangegrade=this.onChangegrade.bind(this); 
   this.onChangesection=this.onChangesection.bind(this); 
   this.onChangespecialite=this.onChangespecialite.bind(this); 
   this.onChangebirthDate=this.onChangebirthDate.bind(this); 
   this.onChangeadresse=this.onChangeadresse.bind(this); 
   this.onChangemobile=this.onChangemobile.bind(this); 
   this.onChangeposte=this.onChangeposte.bind(this); 
   this.onChangepromotion=this.onChangepromotion.bind(this); 
   this.onSubmit=this.onSubmit.bind(this);


   this.state={
           number:0 ,
           name:"",
           lastName:"",
          grade:"",
          section:"",
          specialite:"",
           birthDate:new Date(),
           adresse:"",
           mobile:"",
            poste:"",
            promotion:"",
            promotions:[]
     } 
  }

  componentDidMount() {
    axios.get('http://localhost:5000/promotions/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
           // promotions: response.data.map(promotion => promotion._id),
           promotions: response.data.map(promotion => promotion._id),
            promotion: response.data[0]._id

            
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangenumber(e){
   this.setState({
     number:e.target.value
   });

  }

  onChangename(e){
    this.setState({
      name:e.target.value
    });
 
   }
  onChangelastName(e){
    this.setState({
      lastName:e.target.value
    });
 
   }
   onChangegrade(e){
    this.setState({
      grade:e.target.value
    });
 
   }
   onChangesection(e){
    this.setState({
      section:e.target.value
    });
 
   }
   onChangespecialite(e){
    this.setState({
      specialite:e.target.value
    });
 
   }
   onChangebirthDate(date){
    this.setState({
      birthDate:date
    });
 
   }
   onChangeadresse(e){
    this.setState({
      adresse:e.target.value
    });
 
   }
   onChangemobile(e){
    this.setState({
      mobile:e.target.value
    });
 
   }
   onChangeposte(e){
    this.setState({
      poste:e.target.value
    });
 
   }


   onChangepromotion(e){
    this.setState({
      promotion:e.target.value
    });
 
   }

   onSubmit(e) {
    e.preventDefault();

      const officer={
      number:this.state.number , 
      name:this.state.name,
      lastName:this.state.lastName,
      grade:this.state.grade,
      section:this.state.section,
      specialite:this.state.specialite,
      birthDate:this.state.birthDate,
      adresse:this.state.adresse,
      mobile:this.state.mobile,
      poste:this.state.name,
      promotion:this.state.promotion,


    }
    console.log(officer) ; 
    axios.post('http://localhost:5000/officiers/add', officer)
    .then(res => console.log(res.data)) ;
    
    
    //window.location="/" ;   


   }


    render() {
      
      return (
        <div>
      <h3>Create New officier</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.number}
              onChange={this.onChangenumber}
              />
        </div>

        <div className="form-group"> 
          <label>name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
              />
        </div>

        <div className="form-group"> 
          <label>lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangelastName}
              />
        </div>
        <div className="form-group"> 
          <label>grade: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.grade}
              onChange={this.onChangegrade}
              />
        </div>
        <div className="form-group"> 
          <label>section: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.section}
              onChange={this.onChangesection}
              />
        </div>
        <div className="form-group"> 
          <label>specialite: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.specialite}
              onChange={this.onChangespecialite}
              />
        </div>

        <div className="form-group">
          <label>birh date: </label>
          <div>
            <DatePicker
              selected={this.state.birthDate}
              onChange={this.onChangebirthDate}
            />
          </div>
        </div>
        <div className="form-group"> 
          <label>adresse: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.adresse}
              onChange={this.onChangeadresse}
              />
        </div>
        <div className="form-group"> 
          <label>mobile: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangemobile}
              />
        </div>

      
        <div className="form-group"> 
          <label>poste: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.poste}
              onChange={this.onChangeposte}
              />
        </div>

        <div className="form-group"> 
          <label>promotion: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.promotion}
              onChange={this.onChangepromotion}>
              {
                this.state.promotions.map(function(promotion) {
                  return <option 
                    key={promotion}
                    value={promotion}>{promotion}
                    </option>;
                })
              }
          </select>
        </div>
        

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
       
      );
    }
  
  
}
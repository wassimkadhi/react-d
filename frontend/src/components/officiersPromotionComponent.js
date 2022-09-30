import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Officier = props => (
  <tr>
    <td>{props.exercise.number}</td>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.lastName}</td>
    <td>{props.exercise.grade}</td>
    <td>{props.exercise.section}</td>
    <td>{props.exercise.specialite}</td>
    <td>{props.exercise.mobile}</td>
    <td>{props.exercise.promotion.name}</td>
    
    
    
  </tr>
)

export default class OfficiersPromotion extends Component {
   
  constructor(props) {

    super(props);
    this.state = {officiers: [],
    nbr:Number };
  }
  

  componentDidMount() {
    const a= ("http://localhost:5000"+window.location.pathname);
  
    console.log(a);
    axios.get(a)
      .then(response => {
        
        this.setState({ officiers: response.data 
        });
        this.setState({nbr:response.data.length});
        
      })
      .catch((error) => {
        console.log("there is an error "+error);
      })
  }

  

  officierList() {
    return this.state.officiers.map(currentexercise => {
      return <Officier exercise={currentexercise} />;
    })
  }

  render() {
    return (
      <div>
        <h3> {this.state.nbr} officiers</h3>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
            <th>number</th>
              <th>name</th>
              <th>last name</th>
              <th>grade</th>
              <th>section</th>
              <th>specialite</th>
              <th>mobile</th>
              <th>promotion</th>

            </tr>
          </thead>
          <tbody>
            { this.officierList() }
          </tbody>
        </table>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Promotion = props => (
  <tr>
    <td>{props.promotion.name}</td>
    <td>{props.promotion.number}</td>
    <td>{props.promotion.type}</td>
    <td>{props.promotion.description}</td>
    <td>{props.promotion.duration}</td>
    <td>{props.promotion.dateD.substring(0,10)}</td>
    <td>{props.promotion.dateF.substring(0,10)}</td>
    <td>{props.promotion.location}</td>

    <td>
      <Link to={"/officiers/"+props.promotion._id}>show</Link> |
    </td>
    
  </tr>
  

)



export default class PromotionList extends Component {
  constructor(props) {
    super(props);

   

    this.state = {promotions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/promotions/')
      .then(response => {
        this.setState({ promotions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  

  promotionList() {
    return this.state.promotions.map(currentpromotion => {
      
      return <Promotion promotion={currentpromotion} />;

    })
  }

  render() {
    return (
      <div>
        <h3>promotions list</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>number</th>
              <th>type</th>
              <th>description</th>
              <th>duration</th>
              <th>date debut</th>
              <th>date fin</th>
              <th>location</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            { this.promotionList() }
          </tbody>
        </table>
      </div>
    )
  }
}

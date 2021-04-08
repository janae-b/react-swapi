import React, { Component } from 'react';
import { getAllStarships } from '../../services/sw-api';
import './StarshipList.css';
import { Link } from "react-router-dom";

class StarshipPage extends Component {
  state = { 
    starships: [],
   };

   async componentDidMount() {
     const results = await getAllStarships();
     this.setState({ starships: results.results })
   }


  render() {
    const {starships} = this.state;
    return ( 
      <>
        <div className="starship-container">
        { starships.length ? 
          <>
          {starships.map((starship, idx) => (
            <div key={idx} className="starship-card">
              <Link
                to={{
                  pathname: '/starship',
                  state: {starship}
                }}
                key={starship.name}
              >
                {starship.name}
              </Link>
            </div>
          ))}
          </>
          :
          <>
            <p>Loading...</p>
          </>
          }
        </div>
      </>
     );
  }
}
 
export default StarshipPage;


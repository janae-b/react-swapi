import React, { Component } from 'react';
import PilotList from '../../components/PilotList/PilotList'
import './StarshipPage.css';
import { Link } from "react-router-dom";

function StarshipPage({location}) {
	const { starship } = location.state;

	return (
    <div id="wrapper">
      <div className="starship-info">
        <h2>NAME: {starship.name}</h2>
        <h2>MODEL: {starship.model}</h2>
        <h2>PILOTS: {starship.pilots.length ? 
          <PilotList pilotUrls={starship.pilots} />
          : 'No Pilots'} </h2>
        <Link to="/">Return to Starship List</Link>
      </div>
    </div>
	);
}
 
export default StarshipPage;


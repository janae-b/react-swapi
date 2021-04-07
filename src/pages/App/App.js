import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StarshipList from '../StarshipList/StarshipList'
import StarshipPage from '../StarshipPage/StarshipPage'


function App() {
  return (
    <> 
      <h1 className="app-title">Star Wars Starships!</h1>
      <Route 
        exact path="/"
        render={ ()=> <StarshipList />}
      />
      <Route exact path='/starship' render={({ location }) => 
        <StarshipPage 
          location={location}
        />      
      }/>


    </>
  );
}

export default App;

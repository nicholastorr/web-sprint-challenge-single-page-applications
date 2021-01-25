import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Pizza from './Pizza'

 
const App = () => {
  return (
    <>
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <br></br>

      <Link to='/pizza'>Order</Link>

      <Route path="/pizza">
            <Pizza />
            </Route>
      </BrowserRouter>
    </>
  );
};


export default App;
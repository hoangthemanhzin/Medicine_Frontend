import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import DenseTable from './compoments/DenseTable';
import Medicine from './compoments/Medicine';
import MedicineAppBar from './compoments/MedicineAppBar';
import BlogPost from './compoments/BlogPost';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
/*
<Router>
  <div className="App">
      <Route path="/test" exact component={Medicine} />

      <Route component={NotFound}/>
  </div>
</Router>
*/

root.render(
     <Router>      
      <MedicineAppBar/>
      <Medicine/>
      <DenseTable/>     
    </Router>  
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React from 'react';
import Homecont from './Homecont';
import CustomerService from './CustomerService.js';
import GrowthCulture from './GrowthCulture.js';
import InsideShinrinyoku from './InsideShinrinyoku.js';
// import Addablog from './Addablog.js';
import './GlobalCss.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function HomePage() {
  return(
      <>
      <div className='container'>
          <div className='Navbar'>
          <div>
          <a href="/" className='navan'>Image</a>
          <a href="#" className='navan'>Features</a>
          <a href="#" className='navan'>Resources</a>
          <a href="#" className='navan'>Blog</a>
          </div>
          <div>
              <a href="addablog"><button className='addbutton'>Add a Blog</button></a>
          </div>
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Homecont />
          </Route>
          <Route exact path="/customer-service">
            <CustomerService />
          </Route>
          <Route exact path="/growth-culture">
            <GrowthCulture />
          </Route>
          <Route exact path="/inside-shinrinyoku">
            <InsideShinrinyoku />
          </Route>
          {/* <Route exact path="/addablog">
            <Addablog/>
          </Route> */}s
        </Switch>
      </Router>
      
      <div className='foot'>
        <h2>Get Started with our Blog</h2>
        <p>Want to share Your experience and insights with us. Use this Perfect opportunity to start.</p>
        <button className='addbutton'>Add a blog</button>
      </div>
      </div>     
      </>
  ); 
}

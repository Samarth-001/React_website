import React, { useEffect, useState } from 'react';
import Homecont from './Components/Homecont';
import CustomerService from './Components/CustomerService.js';
import GrowthCulture from './Components/GrowthCulture.js';
import InsideShinrinyoku from './Components/InsideShinrinyoku.js';
import Addablog from './Components/Addablog.js';
import './Components/GlobalCss.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [blogs, setBlogs] = useState([]);
  useEffect(()=> {
    fetch('https://react-first-website-88aa1-default-rtdb.asia-southeast1.firebasedatabase.app/database.json').then(response => {
      return response.json();
    }).then(data =>{
      setBlogs(data);
    });
  },[]);

  return (
    <>
      <Router>
        <div className='container'>
          <div className='Navbar'>
            <div>
              <Link to="/" className='navan'>Image</Link>
              <Link to="#" className='navan'>Features</Link>
              <Link to="#" className='navan'>Resources</Link>
              <Link to="#" className='navan'>Blog</Link>
            </div>
            <div>
              <Link to="/addablog"><button className='abtn'>Add a Blog</button></Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Homecont Blogs={blogs}/>
            </Route>
            <Route exact path="/customer-service">
              <CustomerService Blogs={blogs}/>
            </Route>
            <Route exact path="/growth-culture">
              <GrowthCulture Blogs={blogs}/>
            </Route>
            <Route exact path="/inside-shinrinyoku">
              <InsideShinrinyoku Blogs={blogs}/>
            </Route>
            <Route exact path="/addablog">
              <Addablog />
            </Route>
          </Switch>

          <div className='foot'>
            <h2>Get Started with our Blog</h2>
            <p>Want to share Your experience and insights with us. Use this Perfect opportunity to start.</p>
            <button className='fbtn'>Add a blog</button>
          </div>
        </div>
        <footer>
          <div className='footercontainer'>
            <div>
              <p>Tools for the world's most eccentric blog experience.</p>
            </div>
            <div>
              <p>Ayo</p>
            </div>
            <div>
              <p>Pro</p>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;

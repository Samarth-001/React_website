import React from 'react';
import './GlobalCss.css';
import RecentPosts from './RecentPosts.js';
import Signup from './Signup.js';
import Editorpick from './Editorpick.js';
import Grid from './Grid.js';
import { Link } from "react-router-dom"

export default function Homecont() {
  return( 
  <div>
      <div className='Secondnav'>
           <div>
            <Link to="/" className='navan'><b>Latest Articles</b></Link>
            <Link to="/customer-service" className='navan'>Customer Service</Link>
            <Link to="/growth-culture" className='navan'>Growth & Culture</Link>
            <Link to="/inside-shinrinyoku" className='navan'>Inside Shinrinyoku</Link>
           </div>
           <div>
               <Link to="#">img</Link>
           </div>           
      </div>
      <div>
          <h1>The Shinrinyoku Blog</h1>
          <p>Tips and ideas to help you delight your customers</p>
          <div>
              <div>Customer Service</div>
              <div>Growth & culture</div>
              <div>Inside Inside Shinrinyoku</div>
          </div>
          <RecentPosts/>
          <Signup/>
          <Editorpick/>
          <h2>Discover the latest in....</h2>
          <div>
              <h3>Customer Service</h3>
              <Link to="">View more posts &gt;</Link>
          </div>
          <hr />
          <div>
              <h3>Growth & Culture</h3>
              <Link to="">View more posts &gt;</Link>
          </div>
          <hr />
          <div>
              <h3>Inside Shinrinyoku</h3>
              <Link to="">View more posts &gt;</Link>
          </div>
          <hr />

      </div>
  </div>
  );
}

import React from 'react';
import './GlobalCss.css'

export default function RecentPosts(props) {
  console.log(props.Blogs[0].category);
  return(
      <div>
          <div className='topbar'>
          <h2>Most recent posts</h2>
          <a href="#">View all posts &gt;</a>
          </div>
          <hr className='hrline'/>
          <div className='rgrid'>
              <div className='rgriditem item1'>
                <img src="https://images.wallpaperscraft.com/image/single/street_night_wet_155637_1920x1080.jpg" alt="image here" />
                <p>Category</p>
                <h4>title</h4>
                <p>desc</p>
              </div>
              <div className='rgriditem item2'>
                <img src="https://i.pinimg.com/564x/71/ce/81/71ce819f3e164b1cdcc92f40e12e6b18.jpg" alt="image here" />
                <p>Category</p>
                <h4>Title</h4>
              </div>
              <div className='rgriditem item3'>
                <img src="https://i.pinimg.com/564x/71/ce/81/71ce819f3e164b1cdcc92f40e12e6b18.jpg" alt="image here" />
                <p>Category</p>
                <h4>Title</h4>
                </div>
          </div>
      </div>
  );
}

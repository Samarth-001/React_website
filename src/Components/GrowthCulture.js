import React from 'react';
import RecentPosts from './RecentPosts.js'
import Signup from './Signup.js';
import './GlobalCss.css'
import Grid from './Grid.js';
import Editorpick from './Editorpick.js';
import { Link } from "react-router-dom"

export default function GrowthCulture(props) {
    console.log(props.Blogs[0])
    return (
    <>
    <div>
        <div className='Secondnav'>
           <div>
            <Link to="/" className='navan'>Latest Articles</Link>
            <Link to="/customer-service" className='navan'>Customer Service</Link>
            <Link to="/growth-culture" className='navan'><b>Growth & Culture</b></Link>
            <Link to="/inside-shinrinyoku" className='navan'>Inside Shinrinyoku</Link>
           </div>
        <div>
            <Link to="#">img</Link>
        </div>           
        </div>
        <h1><b>Growth & Culture</b></h1>
        <div className='Thirdnav'>
           <div>
            <Link to="/growth-culture" className='navan'>All</Link>
            <Link to="#" className='navan'>Subcategory1</Link>
            <Link to="#" className='navan'>Subcategory2</Link>
            <Link to="#" className='navan'>Subcategory3</Link>
            <Link to="#" className='navan'>Subcategory4</Link>
            <Link to="#" className='navan'>Subcategory5</Link>
           </div>
        </div>
        <RecentPosts Blogs={props.Blogs}/>
        <Signup/>
        <Editorpick/>
        <h2>Detailed Guides</h2>
            <div className='detailedguide'>
            {props.Blogs.filter(category => category.category == "Growth & Culture").map(filteredBlog => (
            <Grid Blog={filteredBlog}/>
            ))}
            </div>
    </div>
    </>
    );
}

import React from 'react';
import RecentPosts from './RecentPosts.js'
import Signup from './Signup.js';
import Grid from './Grid.js'
import Editorpick from './Editorpick.js';
import './GlobalCss.css';
import { Link } from "react-router-dom"

export default function CustomerService(props) {
   
    return (
        <>
            <div>
                <div className='Secondnav'>
                    <div>
                        <Link to="/" className='navan'>Latest Articles</Link>
                        <Link to="/customer-service" className='navan'><b>Customer Service</b></Link>
                        <Link to="/growth-culture" className='navan'>Growth & Culture</Link>
                        <Link to="/inside-shinrinyoku" className='navan'>Inside Shinrinyoku</Link>
                    </div>
                    <div>
                        <Link to="#">img</Link>
                    </div>
                </div>
                <h1><b>Customer Service</b></h1>
                <div className='Thirdnav'>
                    <div>
                        <Link to="/customer-service" className='navan'>All</Link>
                        <Link to="#" className='navan'>Subcategory1</Link>
                        <Link to="#" className='navan'>Subcategory2</Link>
                        <Link to="#" className='navan'>Subcategory3</Link>
                        <Link to="#" className='navan'>Subcategory4</Link>
                        <Link to="#" className='navan'>Subcategory5</Link>
                    </div>
                </div>
                <RecentPosts Blogs={props.Blogs} />
                <Signup />
                <Editorpick Blogs={props.Blogs} />
                <h2>Detailed Guides</h2>
                <div className='detailedguide'>
                    {props.Blogs.filter(category => category.category == "Community Service").map(filteredBlogs =>  (
                        <Grid Blog={filteredBlogs} />
                    ))}
                </div>
            </div>
        </>
    );
}

import React from 'react';
import './GlobalCss.css';

export default function Grid(props) {
  return(
  <div>
      <img src="" alt="image here" />
      <p>{props.Blog.category}</p>
      <h3>{props.Blog.title}</h3>
  </div>
  );
}

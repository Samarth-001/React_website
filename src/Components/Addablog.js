import React from 'react';
import { useState, useRef } from 'react';
import './GlobalCss.css'

export default function Addablog() {
  const titleInputRef = useRef();
  const blogInputRef = useRef();
  const categoryInputRef= useRef();

  async function AddmovieHandler(val) {
    val.preventDefault();
    const newdata = {
      title: titleInputRef.current.value,
      blog: blogInputRef.current.value,
      category: categoryInputRef.current.value
    }
    console.log(newdata)

    const response = await fetch('https://react-first-website-88aa1-default-rtdb.asia-southeast1.firebasedatabase.app/database.json', {
      method: 'POST',
      body: JSON.stringify(newdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const movie = await response.json()
    console.log(movie)
  }

  return (
    <>
      <form className='addform' onSubmit={AddmovieHandler}>
        <label htmlFor="">Title</label>
        <input
          className='inputf'
          id="title"
          type="text"
          placeholder='Title'
          required
          ref={titleInputRef}
        />
        <label htmlFor="">Blog</label>
        <textarea
          className='inputf text'
          id="blog"
          placeholder='Write blog here'
          ref={blogInputRef}
          required
        ></textarea>
        <label htmlFor="">Category</label>
        <select
          className='inputf'
          id="category"
          ref={categoryInputRef}
        >
          <option value="">--Select--</option>
          <option value="Community Service">Community Service</option>
          <option value="Growth & Culture">Growth & Culture</option>
          <option value="Inside Shinrinyoku">Inside Shinrinyoku</option>
        </select>
        <button className='fbtn'>Add a blog</button>
      </form>
    </>
  );
}

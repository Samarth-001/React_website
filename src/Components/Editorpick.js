import React from "react";

export default function Editorpick(props) {
  return (
    <div className="editorName">
      <div className="eitem1">
        <h2>Editor's Picks</h2>
        <hr />
        <div className="editorpickcont">
          <div>
          <img src="" alt="image here" />
          </div>
          {/* <h4>{props.Blogs[9].title}</h4> */}
        </div>
        <hr />
        <div className="editorpickcont">
          <div>
          <img src="" alt="image here" />
          </div>
          {/* <h4>{props.Blogs[10].title}</h4> */}
        </div>
        <hr />
        <div className="editorpickcont">
          <div>
          <img src="" alt="image here" />
          </div>
          {/* <h4>{props.Blogs[7].title}</h4> */}
        </div>
        <hr />
      </div>
      <div className="eitem2">
        <img src="" alt="Image here" />
        <h4>Subscribe to the Customer Service blog</h4>
        <p>
          Join 251,101 readers who are obsessed with building a customer-centric
          company.
        </p>
        <input type="email" placeholder="Email Address*" required/><button>Subscribe</button>
      </div>
    </div>
  );
}

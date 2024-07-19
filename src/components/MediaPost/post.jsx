import React from "react";
import "../MediaPost/post.css";
import { useState } from "react";

function post() {
  const [postState, setpostState] = useState(0);

  function Click() {
    setpostState(postState + 1);
  }

  function lClick() {
    if (postState > 0) {
      setpostState(postState - 1);
    }
  }

  return (
    <div className="post">
      <img
        src="https://e0.pxfuel.com/wallpapers/491/601/desktop-wallpaper-ultra-original-and-background-it-ultra.jpg"
        alt="nature picture"
      />

      <p>
        ❤️ <h3>{postState}</h3>
      </p>

      <div>
        <button onClick={Click}>Like 👍</button>
        <button onClick={lClick}>Dislike 👎</button>
      </div>
    </div>
  );
}

export default post;

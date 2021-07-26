import React from "react";

function MenuBar({tomato}) {

  return (
    <div className="ui four item menu">
      <span onClick={() => tomato('profile')} className="item active">
        <i className="user large icon" />
      </span>

      <span onClick={() => tomato('photos')} className="item">
        <i className="photo large icon" />
      </span>

      <span onClick={() => tomato('cocktails')} className="item">
        <i className="cocktail large icon" />
      </span>

      <span onClick={() => tomato('pokemon')} className="item">
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;

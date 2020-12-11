import React from "react";

function Theme({onClick}) {
  return (
    <div className="theme__toggle">
      <h3 className="theme__toggle-title">Dark theme</h3>
      <div className="toggle" onClick={onClick}>
        <div className="toggle__circle"></div>
      </div>
    </div>
  );
}

export default Theme;

import React from "react";

const Button = (props) => {
  return (
    <div className="btn">
      <a>{props.children}</a>
    </div>
  );
};

export default Button;

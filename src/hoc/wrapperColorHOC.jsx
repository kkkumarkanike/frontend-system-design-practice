import React, { useState } from "react";

function wrapperColorHOC(WrappedComponent) {
  return function (props) {
    const [isHovered, setIsHovered] = useState(false);

    const OnMouseEnter = () => setIsHovered(true);
    const OnMouseLeave = () => setIsHovered(false);
    return (
      <div onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave}>
        <WrappedComponent isHovered={isHovered} {...props} />
      </div>
    );
  };
}

export default wrapperColorHOC;

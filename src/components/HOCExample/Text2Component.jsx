import React, { useState } from "react";
import wrapperColorHOC from "../../hoc/wrapperColorHOC";

function Text2Component({ text, isHovered }) {
  return (
    <div style={{ backgroundColor: isHovered ? "yellow" : "white" }}>
      {text}
    </div>
  );
}

export default wrapperColorHOC(Text2Component);

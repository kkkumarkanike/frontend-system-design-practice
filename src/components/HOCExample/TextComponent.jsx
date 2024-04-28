import React from "react";
import wrapperColorHOC from "../../hoc/wrapperColorHOC";

function TextComponent({ text, isHovered }) {
  return (
    <p style={{ backgroundColor: isHovered ? "yellow" : "white" }}>{text}</p>
  );
}

export default wrapperColorHOC(TextComponent);

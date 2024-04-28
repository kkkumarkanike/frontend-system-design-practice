import React from "react";
import Text2Component from "./Text2Component";
import TextComponent from "./TextComponent";

function index() {
  return (
    <div>
      <TextComponent text="This is mine" />
      <p>Hi there</p>
      <Text2Component text="One of the major" />
    </div>
  );
}

export default index;

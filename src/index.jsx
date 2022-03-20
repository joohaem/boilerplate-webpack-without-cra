// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App";
const React = require("react");
const ReactDom = require("react-dom");
const { default: App } = require("./App");

ReactDom.render(<App />, document.querySelector("#root"));

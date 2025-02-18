import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxHeading = () => {
  return <h1>yo i'm from functional component</h1>;
};

const HeadigCompnent = () => {
  return <h1>N amasthe react functional component</h1>;
};

root.render(<HeadigCompnent />);

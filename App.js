import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello from react</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
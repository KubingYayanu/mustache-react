import React from "react";
import { format } from "./mustacheHelper";
import "./App.css";

const template = "{{title}} spends {{calc}}";
const data = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  },
};
const renderedTemplate = format(template, data);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Mustache Template: {renderedTemplate}</p>
      </header>
    </div>
  );
}

export default App;

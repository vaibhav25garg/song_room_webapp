import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { render } from "react-dom";
import HomePage from "./HomePage";


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="center">
        
//       </div>
//     );
//   }
// }

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);
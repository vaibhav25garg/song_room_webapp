import React, { Component } from "react";
import { render } from "react-dom";
import { ReactDOM } from "react-dom";
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
//         <HomePage />
//       </div>
//     );
//   }
// }

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);

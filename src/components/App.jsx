import React from "react";
import Login from "./Login";

var isLoggedIn = true;

//const currentTime = new Date().getHours();

//function App() {
//return <div className="container"> {
// isLoggedIn  ? <h1> Hello </h1> : <Login />
// This is how to render something due to boolean
// There is an example using time:
//currentTime > 12 ? <h1> Why are you still working?</h1> : null
// The pass eample show that you can set the else as null

// the difference between && in js and react,
//currentTime > 12 && <h1> Why are you still working?</h1>

//Its the same as the pass example, just shorter
//in react && its use to render things, not as an and

//}</div>;
//}

function App() {
  return (
    <div className="container">
      <Login isRegisted={isLoggedIn} />
    </div>
  );
}

export default App;

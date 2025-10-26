import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// The user data object is imported here
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      
      {/* Pass name and city props to Home */}
      <Home name={user.name} city={user.city} /> 
      
      {/* Pass bio, github, and linkedin props to About */}
      <About 
        bio={user.bio} 
        github={user.github} 
        linkedin={user.linkedin}
      />
    </div>
  );
}

export default App;
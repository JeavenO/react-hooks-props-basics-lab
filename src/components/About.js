import React from "react";
// Import the new Links component
import Links from "./Links";

// The About component accepts props (bio, github, linkedin)
function About(props) {
  // Destructure the required props for cleaner access
  const { bio, github, linkedin } = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      
      {/* Conditional Rendering: 
        If 'bio' exists (not null/undefined) AND is not an empty string, 
        render the <p> tag with the bio content.
      */}
      {bio ? <p>{bio}</p> : null}
      
      {/* Assuming the image source is static for this file */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* Pass the github and linkedin props down to the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;

import React from "react";

// The Links component receives 'github' and 'linkedin' props
function Links(props) {
  // Destructure props for cleaner code
  const { github, linkedin } = props; 
  
  return (
    <div>
      <h3>Links</h3>
      {/* GitHub Link: href and text content are both set to the URL */}
      <a href={github}>{github}</a>
      
      {/* LinkedIn Link: href and text content are both set to the URL */}
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
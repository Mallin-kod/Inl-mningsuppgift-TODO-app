

import React from 'react';

function About() {
  return (
    <div className="about">
      
      <h3>Add tasks:</h3>
      <p>
        Write a task in the text field and press 'Add' to add it to the list.
      </p>
      
      <h3>Mark as completed:</h3>
      <p>
        Click on a checkbox to mark the task as complete. It will then be moved to the end of the list.      </p>

      <h3>Remove tasks:</h3>
      <p>
        Click 'Remove' to delete a task from the list.    
      </p>
    
    </div>
  );
}

export default About;

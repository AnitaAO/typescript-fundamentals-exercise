// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript - Fundamentals Exercise</h1>
  <h2><bold>Background</bold> </h2>
  <p>Imagine you're working at Facebook and your job is to implement the "Like" functionality.</p> 
  
  <p>When a user clicks the "Like" button below a post, the button is highlighted (to indicate that it is selected) and the number of likes is increased.</p> 
  
  <p>You're going to implement this feature in Angular and for that you'll need to create a component. This component is a TypeScript class that encapsulates the data for rendering the like button (eg: the number of likes, and whether the button is in the on/off state). It also responds to user actions. So, when the user clicks the "Like" button, the number of likes should be increased and the button should be in the "selected/on" state. If the user clicks the button again, the number of likes should be decreased and the button should be in the "unselected" state. </p>
  
  <h3>Spec </h3>
  <p>For the purpose of this exercise, forget about the HTML. Your focus should be purely on defining a TypeScript class with the right members (fields, properties, methods, constructor). </p>
  
  <p>Allow the consumer of this class to pass the initial number of likes when creating an instance of this class.</p> 
  
 <p> Define this class in a separate module and use it in the main module. Simulate the scenario where the user clicks the like component. Display the total number of likes and whether the button is in the selected or unselected state on the console. 
  
  </p>
`;
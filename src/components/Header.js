import React from 'react';

const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;

// A basic functional component that renders a header tag with the text props. Pretty simple! We import react like we would for any component, declare a const because it won't change and assign a function to it (but don't call it - we're returning the function to callers, not the result) use an arrow function to declare a component: a function that returns a JSX snippet with variables based on the input props (particularly the '.text' property).

// Note that we're exporting the Header const as default: if you type 'import './Header' you'll have implicit access to 'Header'.
var React = require('react');
// JSX
React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

// Native JavaScript
React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example')
);
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Site header</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('header'));
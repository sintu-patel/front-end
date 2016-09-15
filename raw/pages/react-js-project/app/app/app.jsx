import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';

class App extends React.Component {
  render () {
    return (<div>
    	<Header />
    	<p> Hello React!</p>
    	</div>);
  }
}

render(<App/>, document.getElementById('app'));
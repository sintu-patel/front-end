import React from 'react';
import {render} from 'react-dom';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';

class App extends React.Component {
  render () {
    return (<div className="app">
	    	<div className="container">
	    		<Header />
	    		<Main />
	    		<Footer />
	    	</div>
    	</div>);
  }
}

render(<App/>, document.getElementById('app'));
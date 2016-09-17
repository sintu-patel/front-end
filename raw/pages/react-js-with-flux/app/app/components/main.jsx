import React from 'react';
import {render} from 'react-dom';
import Nav from './nav.jsx';
import Panel from './panel.jsx';
import {data} from './data.js';

class Main extends React.Component {

	componentWillMount() {
		this.state = {
			title: data[0].title,
			content: data[0].content
		};
	}

	showContent(e) {
		var target = e.target.getAttribute('data-key');
		this.setState({
			title: data[target].title,
			content: data[target].content
		})
	}

	render () {
	    return (<div className="row main" >
	    		<Nav showContent={this.showContent.bind(this)} data={data} />
	    		<Panel data={this.state.content} title={this.state.title} />
	    	</div>);
  }
}

module.exports = Main;
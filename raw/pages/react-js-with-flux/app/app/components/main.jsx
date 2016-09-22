import React from 'react';
import {render} from 'react-dom';
import Nav from './nav.jsx';
import Panel from './panel.jsx';
import {data} from './data.js';
var Store = require('../flux/stores/stores');
var Actions = require('../flux/actions/actions');
var $this;

class Main extends React.Component {

	componentWillMount() {
		$this = this;
		//Trigger Actions
		var payloadData = {
			pageNo: 0
		};	
		Actions.updateData(payloadData);
		var storeData = Store.getData();
		this.state = {
			title: storeData.title,
			content: storeData.content
		};

		Store.addChangeListener(this.updateData);
	}

	updateData() {
		var storeData = Store.getData();
		$this.setState({
			title: storeData.title,
			content: storeData.content
		});
	}

	render () {
	    return (<div className="row main" >
	    	<h1>{this.state.allTodos}</h1>
	    		<Nav data={data} />

	    		<Panel data={this.state.content} title={this.state.title} />
	    	</div>);
  	}

}

module.exports = Main;
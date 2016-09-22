import React from 'react';
import {render} from 'react-dom';
var Store = require('../flux/stores/stores');
var $this;

class Panel extends React.Component {
	componentWillMount() {
		$this = this;
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
	    return (<div className="col-xs-9 col-md-8 col-md-offset-1 content-panel component-padding" >
	    		<h2>Content</h2>
	    			<div className="content">
			    		<h3>{this.state.title}</h3>
			    		<p>{this.state.content}</p>
			    	</div>
	    	</div>);
	  }
}

module.exports = Panel;
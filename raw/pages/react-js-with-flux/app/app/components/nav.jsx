import React from 'react';
import {render} from 'react-dom';
var Store = require('../flux/stores/stores');
var Actions = require('../flux/actions/actions');

class Nav extends React.Component {

	componentWillMount() {
		this.state = {
			current: 0
		}
	}

	renderList() {
		var data = this.props.data;
		var html = [];
		for(var i = 0; i < data.length; i++ ) {
			html.push(<li tabIndex="0" className={this.state.current === i ? 'current': ''} data-key={i} key={i} onKeyDown={this.setContentWithEnter.bind(this)} onClick={this.setContent.bind(this)}  >{data[i].title}</li>);
		}

		return html;
	}
	setContentWithEnter(e) {
		var keyCode = e.keyCode;
		if(keyCode === 13) {
			this.setContent(e);
		}
	}

	setContent(e) {
		var target = e.target.getAttribute('data-key');
		target = parseInt(target, 10);
		this.setState({
			current: target
		});
		var payloadData = {
			pageNo: target
		};
		Actions.updateData(payloadData);
	}

	render () {
	    return (<div className="col-xs-3 navigation component-padding" >
		    	<h2>Navigation</h2>
		    	<div className="nav">
		    		<ul>
		    			{this.renderList()}
		    		</ul>
		    	</div>
	    	</div>);
	}
}

module.exports = Nav;

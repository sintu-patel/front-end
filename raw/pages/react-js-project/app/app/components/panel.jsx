import React from 'react';
import {render} from 'react-dom';

class Panel extends React.Component {
  render () {
    return (<div className="col-xs-9 content-panel component-padding" >
    		<h2>Content</h2>
    			<div className="content">
		    		<h3>{this.props.title}</h3>
		    		<p>{this.props.data}</p>
		    	</div>
    	</div>);
  }
}

module.exports = Panel;
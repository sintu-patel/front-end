import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
  render () {
    return (<div className="row header component-padding" >
    		<div className="col-xs-12">
    			<h1>Navigation with ReactJS with Flux</h1>
    		</div>
    	</div>);
  }
}

module.exports = Header;
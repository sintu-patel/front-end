import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
  render () {
    return (<div className="row footer component-padding" >
    		<div className="col-xs-12">
    			<a href="http://www.sintupatel.in">www.sintupatel.in</a>
    			<a href="https://github.com/sintu-patel/front-end/tree/master/raw/pages/react-js-with-flux">code at github</a>
    		</div>
    	</div>);
  }
}

module.exports = Footer;
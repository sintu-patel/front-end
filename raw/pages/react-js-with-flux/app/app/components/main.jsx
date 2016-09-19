import React from 'react';
import {render} from 'react-dom';
import Nav from './nav.jsx';
import Panel from './panel.jsx';
import {data} from './data.js';
var TodoStore = require('../flux/stores/stores');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll()
  };
}

class Main extends React.Component {

	componentWillMount() {
		getTodoState();
		console.log(this.state);
		this.state = {
			title: data[0].title,
			content: data[0].content
		};
	}

	 componentDidMount() {
	    TodoStore.addChangeListener(this._onChange);
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
	    	<h1>{this.state.allTodos}</h1>
	    		<Nav showContent={this.showContent.bind(this)} data={data} />

	    		<Panel data={this.state.content} title={this.state.title} />
	    	</div>);
  }

  _onChange() {
    this.setState(getTodoState());
  }

}

module.exports = Main;
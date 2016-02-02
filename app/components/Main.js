var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({

	getInitialState:function(){
		return{
			name:"Nuwan"
		}
	},
	render:function(){
		return(
			<div>
				<h1>I am a Component {this.state.name}</h1>
			</div>
		);
	}
});

ReactDOM.render(
	<Main/>,
	document.getElementById('container')
);
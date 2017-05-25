import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class About extends Component {
	componentDidMount() {
    	$(this.refs.component).hide().fadeIn(500);
  	}
	render() {
		return (<div ref="component"><h1>About Page</h1></div>);
	}
}

export default About
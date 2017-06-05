import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class Home extends Component {
	componentDidMount() {
    	$(this.refs.component).hide().fadeIn(200);
  	}
	render() {
		return (<div ref="component"><h1>Home Page</h1></div>);
	}
}

export default Home
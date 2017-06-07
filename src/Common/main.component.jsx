import React, {Component} from "react";
import {Link} from "react-router";
import axios from "axios";


class Main extends Component {
	render(){
		return(
			 <div>
                    <div className="top-bar-left">
                        <ul className="menu">
                            <a className="menu-text" href="/">CARS</a>
                            <li><Link to="/" activeClassName="button">Home</Link></li>
                            <li><Link to="/cars" activeClassName="button">Cars</Link></li>
                            <li><Link to="/about" activeClassName="button">About</Link></li>
                        </ul>
                    </div>
                    <ul className="container">
                        {this.props.children}
                    </ul>
            </div>
		);
	}

    
}

export default Main
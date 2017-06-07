import React, {Component} from "react";
import {Link} from "react-router";
import axios from "axios";
import ReactDOM from "react-dom";
import $ from "jquery";

class Car extends Component {

	constructor() {
		super();
		this.state = {cars: []};
	}

	componentDidMount() {
    	this.getCars();
    	$(this.refs.component).hide().fadeIn(100);
  	}

  	getCars() {
		axios.get("http://139.59.213.105:8000/api/sendCars")
        .then((response) => {
            this.setState({cars: response.data})
		});
	}

	render() {
			const carNode = this.state.cars.map((car) => {
				return (
					<li className="list-group-item"><Link
						to={"/cars/"+car.id}		
						key={car.id}>
						{car.name}
					</Link></li>	
				)
			});
			return (
				<div ref="component">
					<h3>Cars Page</h3>
					<ul className="list-group">
						{carNode}
					</ul>	
				</div>	
			);	       
        
		
	}
}	

export default Car






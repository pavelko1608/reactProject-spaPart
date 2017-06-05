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
    	$(this.refs.component).hide().fadeIn(200);
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
					<Link
						to={"/cars/"+car.id}
						className="list-group-item"
						key={car.id}>
						{car.name}
					</Link>	
				)
			});
			return (
				<div ref="component">
					<h1>Cars Page</h1>
					<div className="list-group">
						{carNode}
					</div>	
				</div>	
			);	       
        
		
	}
}	

export default Car






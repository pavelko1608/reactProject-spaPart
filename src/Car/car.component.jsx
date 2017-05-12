import React, {Component} from "react";
import {Link} from "react-router";
import axios from "axios";

class Car extends Component {

	constructor() {
		super();
		this.state = {cars: []};
	}

	componentDidMount() {
    this.getCars();
  	}

  	getCars() {
		axios.get("http://localhost:8000/api/sendCars")
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
				<div>
					<h1>Cars Page</h1>
					<div className="list-group">
						{carNode}
					</div>	
				</div>	
			);	       
        
		
	}
}	

export default Car






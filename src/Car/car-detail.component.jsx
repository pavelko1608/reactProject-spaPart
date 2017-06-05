import React, {Component} from "react";
import {browserHistory} from 'react-router';
import axios from "axios";
import ReactDOM from "react-dom";
import $ from "jquery";

class CarDetail extends Component {
	constructor() {
		super();
		this.state = {cars: []};
	}

	componentDidMount() {
    	this.getCars();
    	$(this.refs.component).hide().fadeIn(200);
  	}

  	getCars() {
		axios.get("http://46.101.114.172/api/sendCars")
        .then((response) => {
            this.setState({cars: response.data})
		});
	}
	handleRedirect() {
		browserHistory.push("/cars");
	}	
//SET A SEPARATE VARIABLE FOR EACH THING (E.G. CARID OR CARNAME) TO THEN BE ABLE TO MANIPULATE DOM MORE FREELY!!
	render() {
		const id = this.props.params.id;
		const car = this.state.cars.map(car => {
			if(car.id == id) {
				return(	
					<div key={car.id}>
				<h1>{car.name}</h1>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<div className="thumbnail" >
							<img src={car.media} alt={car.name}/>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<ul>
							<li><strong>Model</strong>: {car.model}</li>
							<li><strong>Make</strong>: {car.make}</li>	
							<li><strong>Year</strong>: {car.year}</li>	
							<li><strong>Price</strong>: {car.price}</li>	
						</ul>
					</div>
					<div className="col-md-12">
						<button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
					</div>				
				</div>
				</div>
				
					);	
			} 
		});
		
		return (
			<div ref="component">
				{car}
			</div>	
		);
		
	}
}

export default CarDetail
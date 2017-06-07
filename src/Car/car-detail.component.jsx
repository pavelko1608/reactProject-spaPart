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
    	$(this.refs.component).hide().fadeIn(100);
  	}

  	getCars() {
		axios.get("http://139.59.213.105:8000/api/sendCars")
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
					<h2>{car.name}</h2>
						<div className="row">
							<div className="column small-order-2 medium-order-1">
															
								<div className="thumbnail" >
									<img src={car.media} alt={car.name}/>
								</div>
								<button className="button" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
							</div>	
						
							<div className="column small-order-1 medium-order-2">
								<ul className="list-group">
									<li className="list-group-item"><strong>Model</strong>: {car.model}</li>
									<li className="list-group-item"><strong>Make</strong>: {car.make}</li>	
									<li className="list-group-item"><strong>Year</strong>: {car.year}</li>	
									<li className="list-group-item"><strong>Price</strong>: {car.price}</li>	
								</ul>
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
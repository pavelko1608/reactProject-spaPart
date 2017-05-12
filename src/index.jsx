import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Home from "./Common/home.component.jsx";
import About from "./Common/about.component.jsx";
import Car from "./Car/car.component.jsx";
import Main from "./Common/main.component.jsx";
import CarDetail from "./Car/car-detail.component.jsx";
import axios from "axios";

render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home} />
			<Route path="/cars" component={Car} />
			<Route path="/cars/:id" component={CarDetail} />
			<Route path="/about" component={About}/>
		</Route>	
	</Router>,
	document.getElementById("container")	
);
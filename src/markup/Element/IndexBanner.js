import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bnr1 = require('./../../images/main-slider/slide2.jpg');

class IndexBanner extends Component {
	componentDidMount() {
		var i = 0;
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function (event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function (event) {
				var inputValue = this.value;
				if (inputValue === '') {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}
		// Placeholder Animation End
	}
	render() {
		return (
			<div className="dez-bnr-inr dez-bnr-inr-md" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
				<div className="container">
					<div className="dez-bnr-inr-entry align-m">
						<div className="find-job-bx">
							<Link to={"#"} className="site-button button-sm">Encuentra vacantes, empleos & oportunidades profesionales</Link>
							{/* <h2>Search Between More Then <br /> <span className="text-primary">50,000</span> Open Jobs.</h2> */}
							<h2>Encuentra tu trabajo ideal <br /> con la multitud de ofertas que hay para ti</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default IndexBanner;
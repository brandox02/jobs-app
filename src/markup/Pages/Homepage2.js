import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Jobcategories from './../Element/Jobcategories';
import Jobsection from './../Element/Jobsection';
import Owltestimonial from './../Element/Owlblog1';
import Latestblogowl from './../Element/Owlblog2';

var bnr1 = require('./../../images/main-slider/slide1.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');
var bnr3 = require('./../../images/background/bg3.jpg');

function Homepage2(){
	return(
		<>
			<Header />	
			<div className="page-content">
				<div className="dez-bnr-inr dez-bnr-inr-md overlay-black-dark" style={{backgroundImage:"url(" + bnr1 + ")"}}>
					<div className="container">
						<div className="dez-bnr-inr-entry align-m text-white">
							<div className=" job-search-form">
								<h2 className="text-center">La Manera Mas Facil de encontrar tu nueva trabajo</h2>
								<h3>Encuentra Trabajo, Empleados & Oportunidades Profesionales</h3>
								<form>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Buscar por nombre, palabra clave" />
										<input type="text" className="form-control" placeholder="Busca por pais, ciudad" />
										<div className="input-group-prepend">
											<button className="site-button">Search</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="section-full job-categories content-inner-2 bg-white">
					<div className="container">
						<div className="section-head text-center">
							<h2 className="m-b5">Categorias Populares</h2>
							<h5 className="fw4">Más de 20 categorias esperando por ti</h5>
						</div>
						
						<Jobcategories />
					</div>
				</div>	
				<div className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix" style={{backgroundImage:"url(" + bnr2 + ")"}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="m-b10">Haz la Diferencia con tu Resumen Profesional Online</h2>
								<p className="m-b0">Configura tu resumen profesional online y empieza a aplicar a todas las vacantes que tenemos para ti...</p>
								<Link to={"/register-2"} className="site-button m-t20 outline outline-2 radius-xl">Crear una cuenta</Link>
							</div>
						</div>
					</div>
				</div>
				<Jobsection />
				{/* <div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{backgroundImage: "url(" + bnr3 + ")"}}>
					<div className="container">
						<div className="section-head text-center text-white">
							<h2 className="m-b5">Testimonials</h2>
							<h5 className="fw4">Few words from candidates</h5>
						</div>
						<Owltestimonial />
					</div>
				</div> */}
				{/* <div className="section-full content-inner-2 overlay-white-middle">
					<div className="container">
						<div className="section-head text-black text-center">
							<h2 className="text-uppercase m-b0">Our Latest Blog</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
						</div>
						<Latestblogowl />
					</div>
				</div>	 */}
			</div>
			<Footer />
		</>	
	)
}

export default Homepage2;
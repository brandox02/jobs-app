import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';
import GoogleMaps from "simple-react-google-maps";
import { CompanySideBar } from '../../components/CompanySideBar';

function Companyprofile(){
	return(
		<>
			<Header2 />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<CompanySideBar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Perfil de Compañia</h5>
											<Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Atrás</Link>
										</div>
										<form>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Nombre</label>
														<input type="text" className="form-control" placeholder="Introduce el nombre de la compañia" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" placeholder="info@gmail.com" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Sitio Web</label>
														<input type="text" className="form-control" placeholder="Link del sitio web" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Fecha de Fundación </label>
														<input type="date" className="form-control" placeholder="17/12/2018" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Pais</label>
														 <Form.Control as="select" custom className="custom-select">
															<option>República Dominicana</option>
															<option>Colombia</option>
															<option>USA</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Ciudad</label>
														 <Form.Control as="select" custom className="custom-select">
															<option>Santiago</option>
															<option>Santo Domingo</option>
															<option>San Francisco de Macorís</option>
														</Form.Control>
													</div>
												</div>
												{/* <div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Categoría</label>
														 <Form.Control as="select" custom className="custom-select">
															<option>Web Designer</option>
															<option>Web Developer1</option>
														</Form.Control>
													</div>
												</div> */}
												
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Descripción:</label>
														<textarea className="form-control" placeholder='Descripción de la empresa'>
														</textarea>
													</div>
												</div>
											</div>
											
											{/* <div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Información de Contacto</h5>
											</div>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Teléfono</label>
														<input type="text" className="form-control" placeholder="+1 123 456 7890" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" placeholder="exemple@gmail.com" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Contry</label>
														<input type="text" className="form-control" placeholder="India" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>City</label>
														<input type="email" className="form-control" placeholder="Delhi" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Zip</label>
														<input type="email" className="form-control" placeholder="504030" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Address</label>
														<input type="email" className="form-control" placeholder="New york city" />
													</div>
												</div>
												<div className="col-lg-12">
													<GoogleMaps
														apiKey={"AIzaSyBPDjB2qkV4Yxn9h0tGSk2X5uH6NKmssXw"}
														style={{ height: "300px", width: "100%" , border:"0"}}
														zoom={6}
														center={{ lat: 37.4224764, lng: -122.0842499 }}
														markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
													/>
												</div>
											</div> */}
											
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Redes Sociales</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Facebook</label>
														<input type="text" className="form-control" placeholder="https://www.facebook.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Twitter</label>
														<input type="email" className="form-control" placeholder="https://www.twitter.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Google</label>
														<input type="text" className="form-control" placeholder="https://www.google.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Linkedin</label>
														<input type="email" className="form-control" placeholder="https://www.linkedin.com/" />
													</div>
												</div>
											</div>
											<button type="submit" className="site-button m-b30">Guardar</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Companyprofile;
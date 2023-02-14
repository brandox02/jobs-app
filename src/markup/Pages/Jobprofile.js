import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Profilesidebar from './../Element/Profilesidebar';
import { Form } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format';

function Jobprofile() {
	return (
		<>
			<Header2 />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Información Básica</h5>
											<Link to={"./"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Tu Nombre:</label>
														<input type="text" className="form-control" placeholder="" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Titulo Profesional:</label>
														<input type="text" className="form-control" placeholder="Ej: Desarrollador Web" />
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Edad:</label>
														<input type="text" className="form-control" placeholder="" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Salario Actual:</label>
														<NumericFormat
															className="form-control"
															prefix='RD$'
															thousandSeparator
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Salario Deseado:</label>
														<NumericFormat
															className="form-control"
															prefix='RD$'
															thousandSeparator
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<label>Idiomas:</label>
													<select class="selectpicker" multiple data-live-search="true">
														<option>Español</option>
														<option>Ingles</option>
														<option>Frances</option>
													</select>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Gender</label>
														<div className="row">
															<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																<div className="custom-control custom-radio">
																	<input type="radio" className="custom-control-input" id="male" name="example1" />
																	<label className="custom-control-label" htmlFor="male">Male</label>
																</div>
															</div>
															<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																<div className="custom-control custom-radio">
																	<input type="radio" className="custom-control-input" id="female" name="example1" />
																	<label className="custom-control-label" htmlFor="female">Female</label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Fecha de nacimiento:</label>
														<input className='form-control' type={'date'} />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Descripción:</label>
														<textarea className="form-control">
														</textarea>
													</div>
												</div>
											</div>
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Información de Contacto</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Teléfono:</label>
														<input type="text" className="form-control" placeholder="+1 123 456 7890" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email:</label>
														<input type="text" className="form-control" placeholder="info@example.com" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Pais de Residencia</label>
														<Form.Control as="select" custom className="custom-select">
															<option>República Dominicana</option>
															<option>Colombia</option>
															<option>USA</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Ciudad de Residencia</label>
														<Form.Control as="select" custom className="custom-select">
															<option>República Dominicana</option>
															<option>Colombia</option>
															<option>USA</option>
														</Form.Control>
													</div>
												</div>
											</div>
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Redes Sociales</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Facebook</label>
														<input type="text" className="form-control" placeholder="https://facebook.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Twitter</label>
														<input type="text" className="form-control" placeholder="https://twitter.com/" />
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Linkedin:</label>
														<input type="text" className="form-control" placeholder="https://twitter.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Github:</label>
														<input type="text" className="form-control" placeholder="https://github.com/" />
													</div>
												</div>
											</div>
											<button className="site-button m-b30">Guardar</button>
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
export default Jobprofile;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import { Form } from 'react-bootstrap';
import { CompanySideBar } from '../../components/CompanySideBar';
import { NumericFormat } from 'react-number-format';

function Componypostjobs() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<CompanySideBar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Publicar una Vacante</h5>
											<Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Titulo</label>
														<input type="text" className="form-control" placeholder="Enter Job Title" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email de Contacto</label>
														<input type="email" className="form-control" placeholder="info@gmail.com" />
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="form-group">
														<label>Tags</label>
														<input type="text" className="form-control tags_input" placeholder='html,css,javascript' />
													</div>
												</div>
												<div className='d-flex align-items-center col-lg-4 col-md-4'>
													<div className=" custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="check1" name="example1" />
														<label className="custom-control-label" htmlFor="check1">Inglés Requerido</label>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Contrato de Trabajo</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Por Tiempo Indefinido</option>
															<option>Temporal</option>
															<option>Pasantia</option>
															<option>Freelance</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Modalidad de Trabajo</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Presencial</option>
															<option>Semi Presencial</option>
															<option>Remoto</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Horario de Trabajo</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Tiempo Completo</option>
															<option>Medio Tiempo</option>
														</Form.Control>
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Tiempo de Experiencia Requerido</label>
														<Form.Control as="select" custom className="custom-select">
															<option>No requiere experiencia previa</option>
															<option>1 Año</option>
															<option>2 Años</option>
															<option>3 Años</option>
															<option>4 Años</option>
															<option>5 Años</option>
															<option>6 Años</option>
															<option>7 Años</option>
															<option>8 Años</option>
															<option>9 Años</option>
															<option>10 Años</option>
															<option>Más de 10 Años</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Categoría</label>
														<Form.Control as="select" custom className="custom-select">
															<option>IT</option>
															<option>Ventas</option>
															<option>Recursos Humanos</option>
															<option>Contabilidad</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Salario Mínimo</label>
														<NumericFormat
															className='form-control'
															prefix='$'
															thousandSeparator
															placeholder='Introduce el salario mínimo para esta vacante'
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Salario Máximo</label>
														<NumericFormat
															className='form-control'
															prefix='$'
															thousandSeparator
															placeholder='Introduce el salario máximo para esta vacante'
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>País</label>
														<Form.Control as="select" custom className="custom-select">
															<option>USA</option>
															<option>República Dominicana</option>
															<option>Argentina</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Ciudad</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Santiago</option>
															<option>Santo Domingo</option>
															<option>Pedernales</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Dirección</label>
														<input type="text" className="form-control" placeholder={'Introduce la dirección del trabajo'} />
													</div>
												</div>
												<div className="col-lg-4 col-md-4 d-flex align-items-center">
													<div className="form-group">
														<label>Tiempo de Vigencia de la Vacante</label>
														{/* <input type="text" className="form-control w-50" placeholder={''} value={30}/> */}
														<NumericFormat
															className='form-control'
															suffix=' Dias'
															placeholder='Dias'
														/>
													</div>
												</div>

												{/* <div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Upload File</label>
														<div className="custom-file">
															<p className="m-a0">
																<i className="fa fa-upload"></i>
																Upload File
															</p>
															<input type="file" className="site-button form-control" id="customFile" />
														</div>
													</div>
												</div> */}
											</div>
											<button type="button" className="site-button m-b30">Publicar Vacante</button>
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
export default Componypostjobs;
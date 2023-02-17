import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { CompanySideBar } from '../../components/CompanySideBar';

function CompanyChangePassword() {
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


									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Cambiar Contraseña</h5>
											<Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-12">
													<div className="form-group">
														<label>Actual Contraseña</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label>Nueva Contraseña </label>
														<input type="password" placeholder='' className="form-control" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label>Confirma la Nueva Contraseña</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-12 m-b10">
													<button className="site-button">Guardar</button>
												</div>
											</div>
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
export default CompanyChangePassword;
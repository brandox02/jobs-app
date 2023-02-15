import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Profilesidebar from '../Element/Profilesidebar';

function Changepasswordpage() {
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
											<h5 className="font-weight-700 pull-left text-uppercase">Change Password</h5>
											<Link to={"/jobs-cv-manager"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-12">
													<div className="form-group">
														<label>Old Password</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label>New Password </label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label>Confirm New Password</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-12 m-b10">
													<button className="site-button">Update Password</button>
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
export default Changepasswordpage;
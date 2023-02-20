import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
// import { Modal } from 'react-bootstrap';
import { CompanySideBar } from '../../../components/CompanySideBar';
import { useActions } from './useActions';
import { Pagination } from '../../../components/Pagination';
import { Modal } from './accessories/Modal';

function Companymanage() {
	const { jobs, page, setPage, goToManagement, deleteJob, deleteJobModal, setDeleteJobModal, totalPages } = useActions();
	return (
		<>
			<Header />
			<Modal
				open={deleteJobModal}
				setOpen={setDeleteJobModal}
				deleteJob={deleteJob}
			/>

			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<CompanySideBar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx browse-job clearfix">
										<div className="job-bx-title  clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Administrar Vacantes</h5>
											{/* <div className="float-right">
													<span className="select-title">Sort by freshness</span>
													<select className="custom-btn">
														<option>All</option>
														<option>None</option>
														<option>Read</option>
														<option>Unread</option>
														<option>Starred</option>
														<option>Unstarred</option>
													</select>
												</div> */}
										</div>
										<table className="table-job-bx cv-manager company-manage-job">
											<thead>
												<tr>
													{/* <th className="feature">
														<div className="custom-control custom-checkbox">
															<input type="checkbox" id="check12" className="custom-control-input selectAllCheckBox" name="example1" />
															<label className="custom-control-label" htmlFor="check12"></label>
														</div>
													</th> */}
													<th>Vacante</th>
													<th>Postulaciones</th>
													<th>Estatus</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												{jobs.map(job => (
													<tr key={job.id}>
														{/* <td className="feature">
															<div className="custom-control custom-checkbox">
																<input type="checkbox" className="custom-control-input" id="check1" name="example1" />
																<label className="custom-control-label" htmlFor="check1"></label>
															</div>
														</td> */}
														<td className="job-name">
															<Link to={"#"} onClick={() => goToManagement(job)}>{job.name}</Link>
															<ul className="job-post-info">
																<li><i className="fa fa-map-marker"></i>{`${job.city.name}, ${job.country.name}`}</li>
																<li><i className="fa fa-bookmark-o"></i> {job.dailyWorkTime.name}</li>
																<li><i className="fa fa-filter"></i> {job.workingModality.name}</li>
															</ul>
														</td>
														<td className="application text-primary">
															{`${job.applications.length} ${job.applications.length === 1 ? 'postulación' : 'postulaciones'}`}
														</td>
														<td className="expired pending">{job.status.name} </td>
														<td className="job-links">
															<Link to={"#"} onClick={() => goToManagement(job)}>
																<i className="fa fa-eye"></i></Link>
															<Link to={"#"} onClick={() => setDeleteJobModal(job)}><i className="ti-trash"></i></Link>
														</td>
													</tr>
												))}
											</tbody>
										</table>
										<Pagination page={page} setPage={setPage} pageQuantity={totalPages} />

										{/* <Modal show={company} onHide={setCompany} className="modal fade modal-bx-info">
											<div className="modal-dialog my-0" role="document">
												<div className="modal-content">
													<div className="modal-header">
														<div className="logo-img">
															<img alt="" src={require("./../../../images/logo/icon2.png")} />
														</div>
														<h5 className="modal-title">Company Name</h5>
														<button type="button" className="close" onClick={() => setCompany(false)}>
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div className="modal-body">
														<ul>
															<li><strong>Job Title :</strong><p> Web Developer – PHP, HTML, CSS </p></li>
															<li><strong>Experience :</strong><p>5 Year 3 Months</p></li>
															<li><strong>Deseription :</strong>
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.</p>
															</li>
														</ul>
													</div>
													<div className="modal-footer">
														<button type="button" className="btn btn-secondary" onClick={() => setCompany(false)}>Close</button>
													</div>
												</div>
											</div>
										</Modal> */}
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
export default Companymanage;
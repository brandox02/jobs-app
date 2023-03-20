import React from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { useActions } from './useActions';
import { AdminBackofficeSideBar } from '../../../components/AdminBackofficeSideBar';
import { Link } from 'react-router-dom';
import { Pagination } from '../../../components/Pagination';

function AdminBackofficeCompanies() {
	const { totalItems, totalPages, users, page, setPage, goToApplications } = useActions();
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<AdminBackofficeSideBar />
								<div className="col-xl-9 col-lg-9 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase mb-3">Compañias ({totalItems})</h5>
											<table className="table-job-bx cv-manager company-manage-job">
												<thead>
													<tr>
														{/* <th className="feature">
														<div className="custom-control custom-checkbox">
															<input type="checkbox" id="check12" className="custom-control-input selectAllCheckBox" name="example1" />
															<label className="custom-control-label" htmlFor="check12"></label>
														</div>
													</th> */}
														<th>Nombre</th>
														<th>Ubicación</th>
														<th>Fecha de Fundación</th>
														<th>Website</th>
														{/* <th>Nombre del Usuario de la Compañia</th>
														<th>Email del Usuario de la Compañia</th> */}
														<th>Postulaciones</th>
													</tr>
												</thead>
												<tbody>
													{users.map(user => {
														const applications = user.createdJobs.map(x => x.applications).flat();
														return (
															<tr key={user.id}>
																<td className="job-name">
																	{user?.companyProfile?.name}
																</td>
																<td className="expired pending">{`${user?.companyProfile?.city?.name || ""}, ${user?.companyProfile?.country?.name || ''}`} </td>
																<td className="job-name">
																	{user?.companyProfile?.foundationDate || ''}
																</td>

																<td className="job-name">
																	{user?.companyProfile?.website || ''}
																</td>
																{/* <td className="job-name">
																{`${user.firstname} ${user.lastname}`}
															</td>
															<td className="job-name">
																{user.email}
															</td> */}
																<td
																	className="application text-primary"
																	onClick={() => goToApplications({ userId: user.id })}
																>
																	<Link to={'#'}>
																		{`${applications.length} ${applications.length === 1 ? 'postulación' : 'postulaciones'}`}
																	</Link>
																</td>
															</tr>
														)
													})}
												</tbody>
											</table>
											<Pagination page={page} setPage={setPage} pageQuantity={totalPages} />
										</div>
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

export default AdminBackofficeCompanies;
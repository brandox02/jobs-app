import React from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { useActions } from './useActions';
import { AdminBackofficeSideBar } from '../../../components/AdminBackofficeSideBar';
import { Link } from 'react-router-dom';
import { Pagination } from '../../../components/Pagination';

function AdminBackofficeCandidates() {
	const { totalItems, totalPages, users, page, setPage, goToCandidateProfile, goToApplications } = useActions();
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
											<h5 className="font-weight-700 pull-left text-uppercase mb-3">Candidatos ({totalItems})</h5>
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
														<th>Email</th>
														{/* <th>Celular</th> */}
														<th>Salario Actual</th>
														{/* <th>Salario Deseado</th> */}
														<th>Ubicación</th>
														<th>Género</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{users.map(user => (
														<tr key={user.id}>
															<td className="job-name" onClick={() => goToCandidateProfile({ user })}>
																<Link to={'#'}>{`${user.firstname} ${user.lastname}`}</Link>
															</td>
															<td className="expired pending">{user.email} </td>
															{/* <td className="job-name">
																{user?.candidateProfile?.phone}
															</td> */}
															<td className="job-name">
																{user?.candidateProfile?.currentSalary}
															</td>
															{/* <td className="job-name">
																{user?.candidateProfile?.desiredSalary}
															</td> */}
															<td className="job-name">
																{`${user?.candidateProfile?.city?.name || ''} ${user?.candidateProfile?.country?.name || ''}`}
															</td>
															<td className="job-name">
																{user?.candidateProfile?.gender?.name}
															</td>
															<td
																className="application text-primary"
																onClick={() => goToApplications({ userId: user.id })}
															>
																<Link to={'#'}>
																	{`${user.applications.length} ${user.applications.length === 1 ? 'postulación' : 'postulaciones'}`}
																</Link>
															</td>
															<td className="expired pending">{''} </td>
															<td className="job-links">
																{/* <Link to={"#"} onClick={() => { }}>
																	<i className="fa fa-eye"></i></Link>
																<Link to={"#"} onClick={() => { }}><i className="ti-trash"></i></Link> */}
															</td>
														</tr>
													))}
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

export default AdminBackofficeCandidates;
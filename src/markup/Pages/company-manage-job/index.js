import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from './useActions';
import { Pagination } from '../../../components/Pagination';
import { Modal } from './accessories/Modal';

function Companymanage() {
	const { jobs, page, setPage, goToManagement,
		deleteJob, deleteJobModal, setDeleteJobModal, totalPages, goToApplications
	} = useActions();
	// console.log({ deleteJobModal })
	return (
		<>
			<Modal
				open={!!deleteJobModal}
				setOpen={setDeleteJobModal}
				deleteJob={deleteJob}
			/>
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
						<th>Vacante</th>
						<th>Postulaciones</th>
						<th>Estatus</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{jobs.map(job => (
						<tr key={job.id}>
							<td className="job-name">
								<Link to={"#"} onClick={() => goToManagement(job)}>{job.name}</Link>
								<ul className="job-post-info">
									<li><i className="fa fa-map-marker"></i>{`${job.city.name}, ${job.country.name}`}</li>
									<li><i className="fa fa-bookmark-o"></i> {job.dailyWorkTime.name}</li>
									<li><i className="fa fa-filter"></i> {job.workingModality.name}</li>
								</ul>
							</td>
							<td
								className="application text-primary"
								onClick={() => goToApplications({ jobId: job.id, jobName: job.name })}
							>
								<Link to={'#'}>
									{`${job.applications.length} ${job.applications.length === 1 ? 'postulación' : 'postulaciones'}`}
								</Link>
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
		</>
	)

}
export default Companymanage;